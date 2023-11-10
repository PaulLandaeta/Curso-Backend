import { User } from "../models/user";

export interface UserRepository {
    findById(id: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
}
