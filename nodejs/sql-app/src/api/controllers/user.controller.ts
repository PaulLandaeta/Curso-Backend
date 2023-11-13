import { Request, Response, Router } from 'express';
import { UserService } from '../../app/services/user.service';
import { UserDto } from '../../app/dtos/user.dto';
import { User } from '../../domain/models/User.model';
import { CreateUserDto } from '../../app/dtos/create.user.dto';

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

  public async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const userDto: CreateUserDto = req.body;
      const user = await this.userService.createUser(userDto);
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