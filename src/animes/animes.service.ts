import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { PrismaService } from 'src/prisma.service';
import { Anime } from '@prisma/client';

@Injectable()
export class AnimesService {
  constructor(private database: PrismaService) {}

  async create(dadosDoAnime: CreateAnimeDto): Promise<Anime> {
    const animeExiste = await this.database.anime.findUnique({
      where: { titulo: dadosDoAnime.titulo },
    });

    if (animeExiste) {
      throw new ConflictException('Esse anime já está cadastrado!');
    }

    const anime = await this.database.anime.create({ data: dadosDoAnime });

    return anime;
  }

  async findAll(): Promise<any[]> {
    const anime = await this.database.anime.findMany();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const userNoPass = anime.map(({ status, ...resto }) => resto);

    return userNoPass;
  }

  async findOne(id: string): Promise<Anime> {
    const animeExiste = await this.database.anime.findUnique({
      where: { id },
    });

    if (!animeExiste) {
      throw new NotFoundException(
        'Anime com o ID informado não foi encontrado!',
      );
    }

    delete animeExiste.status;
    return animeExiste;
  }

  async update(id: string, updateAnimeDto: UpdateAnimeDto): Promise<Anime> {
    const anime = await this.database.anime.update({
      data: updateAnimeDto,
      where: { id },
    });
    return anime;
  }

  async remove(id: string): Promise<{ message: string }> {
    const animeExiste = await this.database.anime.findUnique({
      where: { id },
    });

    if (!animeExiste) {
      throw new NotFoundException(
        'Anime com o ID informado não foi encontrado!',
      );
    } else {
      await this.database.anime.delete({
        where: { id },
      });
    }

    return { message: 'Id foi encontrado e deletado' };
  }
}
