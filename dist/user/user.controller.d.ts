import { UserService } from "./user.service";
import { User } from "@prisma/client";
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    getAllUsers(): Promise<{
        UUID: string;
        Username: string;
        Password: string;
        Email: string;
        roomId: string | null;
    }[]>;
    createUser(data: User): Promise<{
        UUID: string;
        Username: string;
        Password: string;
        Email: string;
        roomId: string | null;
    }>;
    getUserById(UUID: string): Promise<{
        UUID: string;
        Username: string;
        Password: string;
        Email: string;
        roomId: string | null;
    }>;
    updateUser(UUID: string, data: User): Promise<{
        UUID: string;
        Username: string;
        Password: string;
        Email: string;
        roomId: string | null;
    }>;
    deleteUser(UUID: string): Promise<{
        UUID: string;
        Username: string;
        Password: string;
        Email: string;
        roomId: string | null;
    }>;
}
