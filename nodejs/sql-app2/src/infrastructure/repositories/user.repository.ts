import { UserRepository } from "../../domain/interfaces/user.repository";
import { UserEntity } from "../entities/user.entity";
import { AppDataSource } from "../config/dataSource";
import { User } from "../../domain/models/User.model";

export class UserRepositoryImpl implements UserRepository {
    async findById(id: string): Promise<User | null> {
        const userEntity = await AppDataSource.getRepository(UserEntity).findOneBy({ id });
        return userEntity ? new User(userEntity) : null;
    }
}
