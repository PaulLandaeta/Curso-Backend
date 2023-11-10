import { UserRepository } from "../../domain/interfaces/userRepository";
import { UserEntity } from "../entities/userEntity";
import { AppDataSource } from "../config/dataSource";
import { User } from "../../domain/models/user";

export class UserRepositoryImpl implements UserRepository {
    async findById(id: string): Promise<User | null> {
        const userEntity = await AppDataSource.getRepository(UserEntity).findOneBy({ id });
        return userEntity ? new User(userEntity) : null;
    }

    async createUser(user: User): Promise<User> {
        // TODO: set user values 
        const userEntity = AppDataSource.getRepository(UserEntity).create({
            username: user.username,
            email: user.email,
            passwordHash: user.passwordHash,
            createdAt: user.createdAt || new Date(),
            lastLogin: user.lastLogin || null,
            roleId: user.roleId
        });

        await AppDataSource.getRepository(UserEntity).save(userEntity);
        return new User({
            id: userEntity.id,
            username: userEntity.username,
            email: userEntity.email,
            passwordHash: userEntity.passwordHash,
            createdAt: userEntity.createdAt,
            lastLogin: userEntity.lastLogin,
            roleId: userEntity.roleId
        })
    }
}
