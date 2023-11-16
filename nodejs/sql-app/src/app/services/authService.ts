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

export class AuthService {
    constructor(private userRepository: UserRepository, private encrypt: Encrypt) { }

    async login(loginDTO: LoginDTO): Promise<UserDto> {
        this.getCache();
        const userEntity: Partial<IUserEntity> = {
            email: loginDTO.email,
            passwordHash: loginDTO.password
        };
        const user: User = await this.userRepository.findByEmail(userEntity.email);
        console.log("🚀 ~ file: authService.ts:32 ~ AuthService ~ login ~ user:", user)
        const USER_KEY = 'USER'
        this.redisCacheService.set(`${USER_KEY}:${user.id}`, JSON.stringify(user));
        if (!user) {
            logger.error(`El usuario con email: ${userEntity.email} no existe`);
            throw new Error('El email o la contraseña son incorrectos');
        }

        const isPasswordValid = await bcrypt.compare(userEntity.passwordHash, user.passwordHash);
        if (!isPasswordValid) {
            logger.error(`La contraseña del usuario es incorrecta`);
            throw new Error('El email o la contraseña son incorrectos');
        }

        const token = this.encrypt.encrypt({ userId: user.id });
        user.token = token;
        user.lastLogin = new Date();

        const userUpdated = await this.userRepository.updateUser(user.id, user);

        // TODO: se deberia modificar el token y tambien el lastlogin
        return {
            id: userUpdated.id,
            username: userUpdated.username,
            email: userUpdated.email,
            lastLogin: userUpdated.lastLogin,
            token: user.token
        };
    }
}