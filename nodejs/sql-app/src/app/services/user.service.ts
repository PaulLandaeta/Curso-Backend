import { IUserEntity } from "../../domain/entities/IUserEntity";
import { UserRepository } from "../../domain/interfaces/user.repository";
import { User } from "../../domain/models/User.model";
import { AppDataSource } from "../../infrastructure/config/dataSource";
import { CreateUserDto } from "../dtos/create.user.dto";
import { UserDto } from '../dtos/user.dto';

export class UserService {
  constructor(private userRepository: UserRepository) { }

  async getUserById(id: string): Promise<UserDto | null> {
    const user = await this.userRepository.findById(id);
    if (!user) return null;

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      roleId: user.roleId
    };
  }

  async createUser(newUser: CreateUserDto): Promise<UserDto | null> {
    const newEntity: IUserEntity = {
      username: newUser.username,
      email: newUser.email,
      passwordHash: newUser.password,
      createdAt: new Date(),
      lastLogin: null,
      roleId: newUser.roleId
    };
    return await this.userRepository.createNewUser(newEntity);
  }
}