import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private service;
    constructor(service: UserService);
    createUser(data: CreateUserDto): Promise<User>;
    update(id: string, data: UpdateUserDto): Promise<User>;
    findMany(): Promise<any[]>;
    findUnique(id: string): Promise<User>;
    delete(id: string): Promise<{
        message: string;
    }>;
    addList(user: User, animeId: string): Promise<User & {
        animes: import(".prisma/client").Anime[];
    }>;
}
