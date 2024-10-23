import { Get, Post, Body, Param, Delete, Put} from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";

@Controller('users')
export class UserController{

    constructor(private readonly UserService: UserService){}

    @Get()
    async getAllUsers(){
        return this.UserService.getAllUsers()
    }

    @Post()
    async createUser(@Body() data: User){
        return this.UserService.createUser(data)

    }

    @Get(':UUID')
    async getUserById(@Param('UUID') UUID: string){
        return this.UserService.getUserById(UUID)
    }

    @Put(':UUID')
    async updateUser(@Param('UUID') UUID: string, @Body() data: User){
        return this.UserService.updateUser(UUID, data)
    }


    @Delete(':UUID')
    async deleteUser(@Param('UUID') UUID: string){
        return this.UserService.deleteUser(UUID)
    }
}
