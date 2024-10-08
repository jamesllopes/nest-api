import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<import("./interfaces/auth").LoginResponseInterface>;
    register(registerDto: RegisterDto): Promise<import("../user/entities/user.entity").default>;
    getProfile(req: any): any;
}
