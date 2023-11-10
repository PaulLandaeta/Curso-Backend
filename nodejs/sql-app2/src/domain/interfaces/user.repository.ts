import { User } from "../models/User.model";

export interface UserRepository {
    findById(id: string): Promise<User | null>;
}