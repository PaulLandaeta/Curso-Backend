# Estructura de Carpetas
Para combinar la Arquitectura Hexagonal con la Arquitectura por Capas, la estructura de carpetas podría ser algo así:
```
src/
│
├── api
│   └──controllers        # PORT in en hexagonal es el web
├── app/                  # Casos de uso de la aplicación (application layer)
│   ├── dtos/              # Data Transfer Objects
│   └── services/         # Servicios de aplicación
│
├── domain/               # Lógica de negocio (domain layer)
│   ├── models/           # Modelos del dominio
│   ├── entities/         # Interfaces de las entidades del dominio
│   ├── models/           # Modelos del dominio
│   └── interfaces/       # Interfaces del repositorio
│
├── infrastructure/       # Implementaciones externas (infrastructure layer)
│   ├── config/           # Configuraciones (db, app)
│   ├── entities/         # Implementación de las entidades
│   ├── repositories/     # Implementación del acceso a datos
│   └── utils/            # Herramientas y utilidades generales
│
└── index.ts               # Punto de entrada de la aplicación

```

# 1. Definición de Entidades y Interfaces del Dominio
Dentro de domain/models/, definimos la entidad User.

domain/models/User.ts

```
import { IUserEntity } from '../entities/IUserEntity';
import { v4 as uuidv4 } from 'uuid';

export class User {
    id: string;
    username: string;
    passwordHash: string;
    email: string;
    createdAt: Date;
    lastLogin: Date | null;
    roleId: string;

    constructor(userEntity: IUserEntity) {
        this.id = userEntity.id || uuidv4();
        this.username = userEntity.username;
        this.email = userEntity.email;
        this.passwordHash = userEntity.passwordHash;
        this.createdAt = userEntity.createdAt || new Date();
        this.lastLogin = userEntity.lastLogin;
        this.roleId = userEntity.roleId;
    }
}
```

En domain/interfaces/, definimos la interfaz del repositorio.

domain/interfaces/userRepository.ts

```
import { User } from "../models/user";

export interface UserRepository {
    findById(id: string): Promise<User | null>;
}
```

# 2. Casos de Uso de Aplicación
En app/services/, implementamos los servicios de aplicación.

app/services/UserService.ts

```
import { UserRepository } from "../../domain/interfaces/userRepository";
import { UserDto } from '../dtos/user.dto';

export class UserService {
    constructor(private userRepository: UserRepository) { }

    async getUserById(id: string): Promise<UserDto | null> {
        const user = await this.userRepository.findById(id);
        if (!user) return null;

        return {
            id: user.id,
            username: user.username,
            email: user.email,
            lastLogin: user.lastLogin
        };
    }
}

```

# 3. Implementación de la Infraestructura
En infrastructure/db/, implementamos el acceso a datos.

infrastructure/db/UserRepository.ts

```
import { UserRepository } from "../../domain/interfaces/userRepository";
import { UserEntity } from "../entities/userEntity";
import { AppDataSource } from "../config/dataSource";
import { User } from "../../domain/models/user";

export class UserRepositoryImpl implements UserRepository {
    async findById(id: string): Promise<User | null> {
        const userEntity = await AppDataSource.getRepository(UserEntity).findOneBy({ id });
        return userEntity ? new User(userEntity) : null;
    }
}

```

# 4. API Controllers
Los controladores manejan las solicitudes HTTP y utilizan los servicios de la aplicación.

infrastructure/api/controllers/UserController.ts
```
import { Request, Response, Router } from 'express';
import { UserService } from '../../app/services/userService';

export class UserController {
    public router: Router;
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
        this.router = Router();
        this.routes();
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const userDto = await this.userService.getUserById(id);

        if (!userDto) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.json(userDto);
    }

    public routes() {
        this.router.get('/:id', this.getUserById.bind(this));
    }
}

```

# 5. Integración y Punto de Entrada
Finalmente, integra todo en tu index.ts y configura tu servidor Express.

```
import express, { Request, Response } from 'express';
import { AppDataSource } from "./infrastructure/config/dataSource";
import { UserService } from './app/services/userService';
import { UserRepositoryImpl } from './infrastructure/repositories/userRepositoryImpl';
import { UserController } from './api/controllers/userController';

AppDataSource.initialize().then(() => {
    const app = express();

    const PORT = 3000;

    app.get('/', (req: Request, res: Response) => {
        res.send('¡Hola Mundo con Express y TypeScript ssssss!');
    });

    const userRepository = new UserRepositoryImpl();
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);

    app.use('/users', userController.router);

    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
}).catch(error => console.log(error));

```