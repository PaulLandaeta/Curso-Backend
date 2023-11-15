import { Request, Response, Router } from 'express';
import { UserService } from '../../app/services/userService';
import { UserDto } from '../../app/dtos/user.dto';
import { CreateUserDTO } from '../../app/dtos/create.user.dto';
import logger from '../../infrastructure/logger/logger';
import { verifyTokenMiddleware } from '../middleware/verifyToken';
import { showErrorResponse, showInfoResponse } from '../../infrastructure/logger/message.format';

export class UserController {
    public router: Router;
    private userService: UserService;


    constructor(userService: UserService) {
        this.userService = userService;
        this.router = Router();
        this.routes();
    }

    // get all users
    public async getUsers(req: Request, res: Response): Promise<void> {
        const users: UserDto[] = await this.userService.getUsers();
        res.json(users);
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log('testing=====', req.user_id);
        const userDto = await this.userService.getUserById(id);

        if (!userDto) {
            // res.status(404).json({ message: 'User not found' });
            showErrorResponse(404, res);
            return;
        }

        res.json(userDto);
    }

    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const userDto: CreateUserDTO = req.body;
            const user = await this.userService.createUser(userDto);
            // return res.status(201).json(user);
            return showInfoResponse(201, user, res);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
                // return res.status(400).json({ message: error.message });
                return showErrorResponse(400, res, error.message);
            }
            // return res.status(400).json({ message: error });
            return showErrorResponse(400, res, error);

        }
    }

    public async deleteUser(req: Request, res: Response): Promise<Response> {
        const { userId } = req.params;
        try {
            logger.debug(`Intentando eliminar al usuario con ID: ${userId}`);
            await this.userService.deleteUser(userId);
            logger.info(`Usuario con ID: ${userId} eliminado con éxito`);
            // return res.status(200).json({ message: 'Usuario eliminado con éxito' });
            return showInfoResponse(200, userId, res);
        } catch (error) {
            logger.error(`Error al eliminar al usuario con ID: ${userId}. Error: ${error}`);
            // return res.status(500).json({ message: error });
            return showErrorResponse(500, res, error);
        }
    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
        const { userId } = req.params;
        const updateData = req.body;
        try {
            logger.debug(`Intentando actualizar al usuario con ID: ${userId}`);
            const updatedUser = await this.userService.updateUser(userId, updateData);
            logger.info(`Usuario con ID: ${userId} actualizado con éxito`);
            // return res.status(200).json({ user: updatedUser });
            return showInfoResponse(200, { user: updatedUser }, res);
        } catch (error) {
            logger.error(`Error al actualizar al usuario con ID: ${userId}. Error: ${error}`);
            // return res.status(500).json({ message: 'Error al actualizar el usuario' });
            return showErrorResponse(500, res, { message: 'Error al actualizar el usuario' });
        }
    };

    public routes() {
        this.router.get('/:id', verifyTokenMiddleware, this.getUserById.bind(this));
        this.router.post('/', this.createUser.bind(this));
        this.router.get('/', this.getUsers.bind(this));
        this.router.delete('/:userId', this.deleteUser.bind(this));
        this.router.put('/:userId', this.updateUser.bind(this));
    }
}
