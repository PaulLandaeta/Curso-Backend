import express from 'express';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository';
import { UserService } from '../services/user.service';
import { UserController } from '../../api/controllers/user.controller';

const userRepository = new UserRepositoryImpl();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export const routes = (server: any) => {
  server.use('/users', userController.router);
};