import { AuthService } from './auth.service';
import { CrendentialsDto } from './dto/credentials.dto';
import { User } from '@prisma/client';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dados: CrendentialsDto): Promise<{
        token: string;
    }>;
    profile(user: User): User;
}
