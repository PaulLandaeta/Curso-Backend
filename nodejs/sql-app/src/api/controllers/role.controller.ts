import { Request, Response, Router } from 'express';
import { RoleService } from '../../app/services/role.service';
import { CreateRoleDto } from '../../app/dtos/create.role.dto';
import logger from '../../infrastructure/logger/logger';
import { showError, showErrorResponse, showInfoResponse } from '../../infrastructure/logger/message.format';

export class RoleController {
  public router: Router;
  private roleService: RoleService;

  constructor(roleService: RoleService) {
    this.roleService = roleService;
    this.router = Router();
    this.routes();
  }

  public async createRole(req: Request, res: Response): Promise<Response> {
    try {
      const roleDto: CreateRoleDto = req.body;
      const role = await this.roleService.createRole(roleDto);
      return showInfoResponse(201, role, res);
    } catch (error) {
      logger.error(showError(400));
      return showErrorResponse(400, res);
    }
  }

  public async getRoleById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const userDto = await this.roleService.getRoleById(id);

    if (!userDto) {
      showErrorResponse(404, res);
      return;
    }
    // res.json(userDto);
    showInfoResponse(200, userDto, res);
  }


  public routes() {
    this.router.get('/:id', this.getRoleById.bind(this));
    this.router.post('/', this.createRole.bind(this));
    // this.router.delete('/:userId', this.deleteUser.bind(this));
    // this.router.put('/:userId', this.updateUser.bind(this));
  }
}