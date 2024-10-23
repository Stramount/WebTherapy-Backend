import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client";


@Injectable()
export class UserService{

    constructor(private prisma: PrismaService){}

        async getAllUsers(): Promise<User[]> {
            return this.prisma.user.findMany()
        }

        async getUserById(UUID: string): Promise<User>{
            return this.prisma.user.findUnique({
                where: {UUID}
            })

        }

        async createUser(data: User): Promise<User>{
            return this.prisma.user.create({
                data
            })
        }

        async updateUser(UUID: string, data: User): Promise<User>{
            return this.prisma.user.update({
                where: {
                    UUID
                },
                data       
            })
        }

        async deleteUser(UUID: string): Promise<User>{
            return this.prisma.user.delete({
                where: {UUID}
            })
        }
}