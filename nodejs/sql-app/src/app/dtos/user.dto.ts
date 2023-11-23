export interface UserDto {
    id: string;
    username: string;
    email: string;
    lastLogin: Date | null;
    token?: string | null;
}
