
import { CreateUserDto } from "../../app/dtos/create.user.dto";
import { UserDto } from "../../app/dtos/user.dto";
import { User } from "../models/User.model";

export interface UserRepository {
  findById(id: string): Promise<UserDto | null>;
  createNewUser(newUser: User): Promise<UserDto>;
}