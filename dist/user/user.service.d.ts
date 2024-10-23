import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUsers(): Promise<User[]>;
    getUserById(UUID: string): Promise<User>;
    createUser(data: User): Promise<User>;
    updateUser(UUID: string, data: User): Promise<User>;
    deleteUser(UUID: string): Promise<User>;
}
