import { User } from "../models/user";

export interface UserRepository {
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
    deleteUser(id: string): Promise<void>;
    updateUser(userId: string, updateData: Partial<User>): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}
