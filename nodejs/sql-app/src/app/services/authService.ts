import { IUserEntity } from "../../domain/entities/IUserEntity";
import { UserRepository } from "../../domain/interfaces/userRepository";
import logger from "../../infrastructure/logger/logger";
import { LoginDTO } from "../dtos/login.dto";
import { jwt as jwtConfig } from '../../infrastructure/config/config';
import jwt from 'jsonwebtoken';
import { UserDto } from "../dtos/user.dto";
import { User } from "../../domain/models/user";
import { Encrypt } from './../utils/encrypt';
import bcrypt from 'bcrypt';
import { RedisCacheService } from "../../infrastructure/cache/redis.cache";

export class AuthService {
    constructor(private userRepository: UserRepository, private encrypt: Encrypt, private redisCacheService: RedisCacheService) { }

    async login(loginDTO: LoginDTO): Promise<UserDto> {
        const userEntity: Partial<IUserEntity> = {
            email: loginDTO.email,
            passwordHash: loginDTO.password
        };
        const user: User = await this.userRepository.findByEmail(userEntity.email);
        if (!user) {
            logger.error(`El usuario con email: ${userEntity.email} no existe`);
            throw new Error('El email o la contraseña son incorrectos');
        }

        const isPasswordValid = await bcrypt.compare(userEntity.passwordHash, user.passwordHash);
        console.log("🚀 ~ file: authService.ts:31 ~ AuthService ~ login ~ isPasswordValid:", isPasswordValid)
        if (!isPasswordValid) {
            logger.error(`La contraseña del usuario es incorrecta`);
            throw new Error('El email o la contraseña son incorrectos');
        }

        const token = await this.encrypt.encrypt({ userId: user.id });
        console.log("🚀 ~ file: authService.ts:37 ~ AuthService ~ login ~ token:", token)
        user.token = token;
        user.lastLogin = new Date();

        const userUpdated = await this.userRepository.updateUser(user.id, user);
        console.log("🚀 ~ file: authService.ts:40 ~ AuthService ~ login ~ userUpdated:", userUpdated)

        return {
            id: userUpdated.id,
            username: userUpdated.username,
            email: userUpdated.email,
            lastLogin: userUpdated.lastLogin,
            token: user.token
        };
    }
}