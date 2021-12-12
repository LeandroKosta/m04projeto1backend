import { AnimesService } from './animes.service';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { Anime } from '@prisma/client';
export declare class AnimesController {
    private readonly animesService;
    constructor(animesService: AnimesService);
    create(createAnimeDto: CreateAnimeDto): Promise<Anime>;
    findAll(): Promise<Anime[]>;
    findOne(id: string): Promise<Anime>;
    update(id: string, updateAnimeDto: UpdateAnimeDto): Promise<Anime>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
