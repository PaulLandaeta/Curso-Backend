import { Request, Response, Router } from 'express';
import { UserService } from '../../app/services/userService';
import { UserDto } from '../../app/dtos/user.dto';
import { CreateUserDto } from '../../app/dtos/create.user.dto';
import logger from '../../infrastructure/logger/logger';
import { showError, showErrorResponse, showInfo, showInfoResponse } from '../../infrastructure/logger/message.format';
import { UpdateUserDto } from '../../app/dtos/update.user.dto';


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
      logger.error(showError(404));
      res.status(404).json({ message: 'User not found' });
      return;
    }
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const userDto: CreateUserDto = req.body;
      const user = await this.userService.createUser(userDto);
      logger.info(showInfo(201, user));
      return showInfoResponse(201, user, res);
    } catch (error) {
      logger.error(showError(404));
      return showErrorResponse(404, res);
    }
  }

  public async updateUserById(req: Request, res: Response): Promise<Response> {
    try {
      const userId: string = req.params.id;
      const userDto: UpdateUserDto = req.body;
      const updatedUser = await this.userService.updateUserById(userId, userDto);
      logger.info(showInfo(200, updatedUser));
      return showInfoResponse(200, updatedUser, res);
    } catch (error) {
      logger.error(showError(404));
      return showErrorResponse(404, res);
    }
  }

  public async deleteUserById(req: Request, res: Response): Promise<Response> {
    try {
      const userId: string = req.params.id;
      const deletedUser = await this.userService.getUserById(userId);

      if (deletedUser) {
        logger.info(showInfo(204, `User with ID ${userId} deleted successfully.`));
        return showInfoResponse(204, deletedUser, res);
      } else {
        logger.error(showError(404));
        return showErrorResponse(404, res);
      }
    } catch (error) {
      logger.error(showError(500));
      return showErrorResponse(500, res);
    }
  }

  public routes() {
    this.router.post('/', this.createUser.bind(this));
    this.router.get('/:id', this.getUserById.bind(this));
    this.router.patch(':id', this.updateUserById.bind(this));
    this.router.delete(':id', this.deleteUserById.bind(this));
  }
}