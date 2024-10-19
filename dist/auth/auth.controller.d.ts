import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(userObject: RegisterAuthDto): Promise<void>;
    loginUser(userObjectLogin: LoginAuthDto): Promise<void>;
}
