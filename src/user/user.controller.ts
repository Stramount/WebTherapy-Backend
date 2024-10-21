import { Get, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('usuario')
export class UserController{

    constructor(private readonly UserService: UserService){}

    @Get('todos')
    getAllUsers(){
        this.UserService.getAllUsers()

    }

}
