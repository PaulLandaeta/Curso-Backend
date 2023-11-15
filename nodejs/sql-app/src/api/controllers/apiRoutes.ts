import { AuthService } from "../../app/services/authService";
import { RoleService } from "../../app/services/roleService";
import { UserService } from "../../app/services/userService";
import { RoleRepositoryImpl } from "../../infrastructure/repositories/roleRepositoryImpl";
import { UserRepositoryImpl } from "../../infrastructure/repositories/userRepositoryImpl";
import { EncryptImpl } from "../../infrastructure/utils/encrypt.jwt";
import { AuthController } from "./authController";
import { RoleController } from "./roleController";
import { UserController } from "./userController";

const encrypt = new EncryptImpl();

const roleRepository = new RoleRepositoryImpl();
const roleService = new RoleService(roleRepository);
const roleController = new RoleController(roleService);

const userRepository = new UserRepositoryImpl();
const userService = new UserService(userRepository, roleRepository);
const userController = new UserController(userService);

const authService = new AuthService(userRepository, encrypt);
const authController = new AuthController(authService);

const API:string = '/api';

export const routes = (server: any) => {
    server.use(`${API}/users`, userController.router);
    server.use(`${API}/roles`, roleController.router);
    server.use(`${API}/auth`, authController.router);
};