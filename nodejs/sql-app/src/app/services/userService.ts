import { IUserEntity } from "../../domain/entities/IUserEntity";
import { UserRepository } from "../../domain/interfaces/userRepository";
import { User } from "../../domain/models/user";
import { CreateUserDto } from "../dtos/create.user.dto";
import { DeleteUserDto } from "../dtos/delete.user.dto";
import { UpdateUserDto } from "../dtos/update.user.dto";
import { UserDto } from '../dtos/user.dto';

export class UserService {
    constructor(private userRepository: UserRepository) { }

    async getUserById(id: string): Promise<UserDto | null> {
        const user = await this.userRepository.findById(id);
        if (!user) return null;

        const userResponse: UserDto = {
            id: user.id,
            username: user.username,
            email: user.email,
            roleId: user.roleId
        }
        return userResponse;
    }

    async createUser(userDto: CreateUserDto): Promise<User> {
        const userEntity: IUserEntity = {
            username: userDto.username,
            email: userDto.email,
            passwordHash: userDto.password,
            roleId: userDto.roleId,
            createdAt: new Date(),
            lastLogin: null,
        };
        const newUser = new User(userEntity);
        return await this.userRepository.createUser(newUser);
    }

    async updateUserById(id: string, userDto: UpdateUserDto): Promise<UserDto | null> {
        const userEntity: IUserEntity = {
            username: userDto.username,
            email: userDto.email,
            passwordHash: userDto.password,
            roleId: userDto.roleId,
            createdAt: new Date(),
            lastLogin: null,
        };
        const newUser = new User(userEntity);
        return await this.userRepository.updateUserById(id, newUser);
    }

    async deleteUserById(id: string): Promise<UserDto | null> {
        return await this.userRepository.deleteUserById(id);
    }
}
