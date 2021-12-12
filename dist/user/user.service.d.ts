import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
export declare class UserService {
    private database;
    constructor(database: PrismaService);
    createUser(dadosDoUsuario: CreateUserDto): Promise<User>;
    update(id: string, dadosDoUsuario: UpdateUserDto): Promise<User>;
    findMany(): Promise<any[]>;
    findUnique(id: string): Promise<User>;
    delete(id: string): Promise<{
        message: string;
    }>;
    addList(user: User, animeId: string): Promise<User & {
        animes: import(".prisma/client").Anime[];
    }>;
}
