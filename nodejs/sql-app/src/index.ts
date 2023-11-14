import express, { Request, Response } from 'express';
import { AppDataSource } from "./infrastructure/config/dataSource";
import { UserService } from './app/services/user.service';
import { UserRepositoryImpl } from './infrastructure/repositories/user.repository';
import { UserController } from './api/controllers/user.controller';
import morgan from "morgan";
import logger from "./infrastructure/logger/logger";
import dotenv from 'dotenv';
import { env } from './infrastructure/config/config';
import { routes } from './app/routes/routes';

AppDataSource.initialize().then(() => {
  const app = express();

  dotenv.config();

  console.log(process.env.ENV); // localhost

  app.use(
    morgan("combined", {
      stream: { write: (message: string) => logger.info(message.trim()) },
    })
  );

  const PORT = env.port;
  app.use(express.json());

  app.get('/', (req: Request, res: Response) => {
    res.send('¡Hola Mundo con Express y TypeScript ssssss!');
  });

  const userRepository = new UserRepositoryImpl();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  app.use('/users', userController.router);

  routes(app);

  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
}).catch(error => console.log(error));
