import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
export declare class AuthService {
    register(userObject: RegisterAuthDto): Promise<void>;
    login(userObjectLogin: LoginAuthDto): Promise<void>;
}
