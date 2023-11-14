import { UserRepository } from "../../domain/interfaces/user.repository";
import { UserEntity } from "../entities/user.entity";
import { AppDataSource } from "../config/dataSource";
import { User } from "../../domain/models/User.model";
import { CreateUserDto } from "../../app/dtos/create.user.dto";
import { UserDto } from "../../app/dtos/user.dto";

export class UserRepositoryImpl implements UserRepository {
  async updateUserById(id: string, user: User): Promise<UserDto> {
    const userEntity = await AppDataSource.getRepository(UserEntity).update(id, user);
    const updatedUserDto: UserDto = {
      id: userEntity.raw.id,
      username: userEntity.raw.username,
      email: userEntity.raw.email,
      roleId: userEntity.raw.roleId
    };
    return updatedUserDto;
  }

  async deleteUserById(id: string): Promise<UserDto> {
    const userEntity = await AppDataSource.getRepository(UserEntity).delete(id);
    const deletedUserDto: UserDto = {
      id: userEntity.raw.id,
      username: userEntity.raw.username,
      email: userEntity.raw.email,
      roleId: userEntity.raw.roleId
    };
    return deletedUserDto;
  }

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
// https://download1590.mediafire.com/t80whfgv5vggSFssVUp7DYQSVkogs2VqgVXJdEqA9aG5rcNZTxWs_UiU5FtJHl98akSib-DvBuC-wOOGuQZ3q_xWSijSWQGCJppsgk0dP_C9kgMnaVO9NssHCIWmPac_N6PjKqcfrbVue24cemlfQaXj_qNlpL_8YvA2QkBgguck92-A/wmzoz8q61wm2tbr/dbcompose.tar
