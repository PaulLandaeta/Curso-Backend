import express, { Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { AppDataSource } from "./infrastructure/config/dataSource";
import { UserService } from './app/services/userService';
import { UserRepositoryImpl } from './infrastructure/repositories/userRepositoryImpl';
import { UserController } from './api/controllers/userController';
import logger from './infrastructure/logger/logger';
import { env } from './infrastructure/config/config';
import { RoleRepositoryImpl } from './infrastructure/repositories/roleRepositoryImpl';
import { RoleService } from './app/services/roleService';
import { RoleController } from './api/controllers/roleController';
import { AuthController } from './api/controllers/authController';
import { AuthService } from './app/services/authService';

AppDataSource.initialize().then(() => {
    const app = express();
    dotenv.config();

    const PORT = env.port;

    app.use(express.json());

    // Setup Logger 
    app.use(morgan('combined', { stream: { write: (message: string) => logger.info(message.trim()) } }));

    app.get('/', (req: Request, res: Response) => {
        res.send('Servidor Up');
    });
    const roleRepository = new RoleRepositoryImpl();
    const roleService = new RoleService(roleRepository);
    const roleController = new RoleController(roleService);
    const userRepository = new UserRepositoryImpl();
    const userService = new UserService(userRepository, roleRepository);
    const userController = new UserController(userService);
    const authService = new AuthService(userRepository);
    const authController = new AuthController(authService);
    
    app.use('/users', userController.router);
    app.use('/roles', roleController.router);
    app.use('/auth', authController.router);

    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
}).catch(error => console.log(error));
