import { IUserEntity } from "../../domain/entities/IUserEntity";
import { UserRepository } from "../../domain/interfaces/userRepository";
import { User } from "../../domain/models/user";
import logger from "../../infrastructure/logger/logger";
import { LoginDTO } from "../dtos/login.dto";

export class AuthService {
    constructor(private userRepository: UserRepository) { }

    async login(loginDTO: LoginDTO): Promise<string> {
        const userEntity: Partial<IUserEntity> = {
            email: loginDTO.email,
            passwordHash: loginDTO.password
        };
        const user = this.userRepository.findByEmail(userEntity.email);
        console.log(user);
        return 'user';
    }
}