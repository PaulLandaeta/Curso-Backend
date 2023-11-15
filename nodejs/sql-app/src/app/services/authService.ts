import { IUserEntity } from "../../domain/entities/IUserEntity";
import { UserRepository } from "../../domain/interfaces/userRepository";
import logger from "../../infrastructure/logger/logger";
import { LoginDTO } from "../dtos/login.dto";
import { jwt as jwtConfig } from '../../infrastructure/config/config';
import jwt from 'jsonwebtoken';
import { UserDto } from "../dtos/user.dto";
import { User } from "../../domain/models/user";
export class AuthService {
    constructor(private userRepository: UserRepository) { }

    async login(loginDTO: LoginDTO): Promise<UserDto> {
        const userEntity: Partial<IUserEntity> = {
            email: loginDTO.email,
            passwordHash: loginDTO.password
        };
        const user: User = await this.userRepository.findByEmail(userEntity.email);
        if (!user) {
            //TODO: create an error deberia ser error ?
        }
        // TODO: deberia estar en este lugar ?  
        const token = jwt.sign({ userId: user.id }, jwtConfig.secretKey, { expiresIn: '1h' });
        user.token = token;
        // TODO: se deberia modificar el token y tambien el lastlogin
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            lastLogin: user.lastLogin,
            token: user.token
        };
    }
}