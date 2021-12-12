import { PrismaService } from 'src/prisma.service';
import { CrendentialsDto } from './dto/credentials.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private database;
    private jwt;
    constructor(database: PrismaService, jwt: JwtService);
    login(dadosDoLogin: CrendentialsDto): Promise<{
        token: string;
    }>;
}
