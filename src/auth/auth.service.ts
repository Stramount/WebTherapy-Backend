import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash } from 'bcrypt';
import { firebaseDataBase } from '../firebase.config';
import {push, ref, set} from 'firebase/database'

@Injectable()
export class AuthService {

  async register(userObject: RegisterAuthDto){

    const dataRef = ref(firebaseDataBase, 'Data');
    const newElementRef = push(dataRef, {dataRef : userObject});
    await set(newElementRef, userObject);

    const { password } = userObject
    const plainToHash = await hash(password, 10)
    userObject = {...userObject, password:plainToHash}
    console.log(userObject)


  }

  async login(userObjectLogin: LoginAuthDto){
    const { email } = userObjectLogin

  }
}
