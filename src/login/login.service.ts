import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

    async obtenerCuenta(id, data){
        const {email, password} = data
        
    }

}
