import { UserRepository } from "../../domain/interfaces/user.repository";
import { UserEntity } from "../entities/user.entity";
import { AppDataSource } from "../config/dataSource";
import { User } from "../../domain/models/User.model";
import { CreateUserDto } from "../../app/dtos/create.user.dto";
import { UserDto } from "../../app/dtos/user.dto";

export class UserRepositoryImpl implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const userEntity = await AppDataSource.getRepository(UserEntity).findOneBy({ id });
    return userEntity ? new User(userEntity) : null;
  }

  async createNewUser(user: User): Promise<UserDto> {
    const userEntity = AppDataSource.getRepository(UserEntity).create({
      username: user.username,
      email: user.email,
      passwordHash: user.passwordHash,
      createdAt: user.createdAt || new Date(),
      lastLogin: user.lastLogin || undefined,
      roleId: user.roleId
    });

    const userResponse = await AppDataSource.getRepository(UserEntity).save(userEntity);
    const postedUserDto: UserDto = {
      id: userResponse.id,
      username: user.username,
      email: user.email,
      roleId: user.roleId
    };
    return postedUserDto;
  }
}
