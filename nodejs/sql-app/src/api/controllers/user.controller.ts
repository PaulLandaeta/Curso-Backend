import { Request, Response, Router } from 'express';
import { UserService } from '../../app/services/user.service';
import { UserDto } from '../../app/dtos/user.dto';
import { User } from '../../domain/models/User.model';
import { CreateUserDto } from '../../app/dtos/create.user.dto';
import logger from '../../infrastructure/logger/logger';

export class UserController {
  public router: Router;
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
    this.router = Router();
    this.routes();
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    logger.info("estoy dentro del UserById Controller");
    try {
      const { id } = req.params;
      const userDto = await this.userService.getUserById(id);
      if (!userDto) {
        logger.error({ status: 404, message: 'User not found' });
        return;
      }
      res.json(userDto);
    } catch (error) {
      logger.error(error);
    }
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const userDto: CreateUserDto = req.body;
      const user = await this.userService.createUser(userDto);
      logger.info();
      return res.status(201).json(user);
    } catch (error) {
      console.error();
      return res.status(400).json({ message: "user not created" });
    }
  }

  public routes() {
    this.router.post('/', this.createUser.bind(this));
    this.router.get('/:id', this.getUserById.bind(this));
  }
}