import { UserDto } from "../../app/dtos/user.dto";
import { User } from "../models/user";

export interface UserRepository {
    findById(id: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
    updateUserById(id: string, user: User): Promise<UserDto | null>;
    deleteUserById(id: string): Promise<UserDto | null>;
}
