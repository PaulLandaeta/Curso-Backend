import { IUserEntity } from "../../domain/entities/IUserEntity";
import { RoleRepository } from "../../domain/interfaces/roleRepository";
import { UserRepository } from "../../domain/interfaces/userRepository";
import { User } from "../../domain/models/user";
import logger from "../../infrastructure/logger/logger";
import { CreateUserDTO } from "../dtos/create.user.dto";
import { UserDto } from '../dtos/user.dto';

export class UserService {
    constructor(private userRepository: UserRepository, private roleRepository: RoleRepository) { }

    // get all users
    async getUsers(): Promise<UserDto[]> {
        const users = await this.userRepository.findAll();

        const usersResponse: UserDto[] = users.map((user: User) => {
            const userDto: UserDto = {
                id: user.id,
                username: user.username,
                email: user.email,
                lastLogin: user.lastLogin
            }
            return userDto;
        });

        return usersResponse;
    }

    async getUserById(id: string): Promise<UserDto | null> {

        const user = await this.userRepository.findById(id);
        // log.debug user

        if (!user) return null;

        const userResponse: UserDto = {
            id: user.id,
            username: user.username,
            email: user.email,
            lastLogin: user.lastLogin
        }
        // log.info user obtenido exitosamente
        return userResponse;
    }

    async createUser(userDto: CreateUserDTO): Promise<User> {
        const role = await this.roleRepository.findById(userDto.roleId);
        if (!role) {
            throw new Error('Rol no encontrado');
        }


        const userEntity: IUserEntity = {
            username: userDto.username,
            email: userDto.email,
            passwordHash: userDto.password,
            createdAt: new Date(),
            lastLogin: null,
            role
        };
        const newUser = new User(userEntity);

        return this.userRepository.createUser(newUser);
    }

    async deleteUser(userId: string): Promise<void> {
        logger.debug(`UserService: Intentando eliminar al usuario con ID: ${userId}`);
        await this.userRepository.deleteUser(userId);
    }

    async updateUser(userId: string, updateData: Partial<CreateUserDTO>): Promise<User> {
        logger.debug(`UserService: Intentando actualizar al usuario con ID: ${userId}`);
        return this.userRepository.updateUser(userId, updateData);
    }
}
