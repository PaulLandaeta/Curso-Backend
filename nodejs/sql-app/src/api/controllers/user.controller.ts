import { Request, Response, Router } from 'express';
import { UserService } from '../../app/services/user.service';

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