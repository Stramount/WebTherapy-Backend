import { Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService){} 

    @Get(':id')
    getAccount(req){
        this.loginService.obtenerCuenta(req.params, req.body)
    }

}
