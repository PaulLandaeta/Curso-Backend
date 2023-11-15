import { IRoleEntity } from "../../domain/entities/IRoleEntity";
import { RoleRepository } from "../../domain/interfaces/role.repository";
import { Role } from "../../domain/models/Role.model";
import { CreateRoleDto } from "../dtos/create.role.dto";

export class RoleService {
  constructor(private roleRepository: RoleRepository) { }

  async createRole(roleDto: CreateRoleDto): Promise<Role> {
    const roleEntity: IRoleEntity = {
      name: roleDto.name,
      description: roleDto.description
    };
    const newRole = new Role(roleEntity);
    return this.roleRepository.createRole(newRole);
  }

  async getRoleById(id: string): Promise<CreateRoleDto | null> {
    const role = await this.roleRepository.findById(id);
    if (!role) { return null; }
    const roleResponse: CreateRoleDto = {
      id: role.id,
      name: role.name,
      description: role.description,
    }
    return roleResponse;
  }
}