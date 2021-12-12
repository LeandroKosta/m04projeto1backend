import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { PrismaService } from 'src/prisma.service';
import { Anime } from '@prisma/client';
export declare class AnimesService {
    private database;
    constructor(database: PrismaService);
    create(dadosDoAnime: CreateAnimeDto): Promise<Anime>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<Anime>;
    update(id: string, updateAnimeDto: UpdateAnimeDto): Promise<Anime>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
