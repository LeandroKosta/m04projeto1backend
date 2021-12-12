import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AnimesService } from './animes.service';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { Anime } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('animes')
export class AnimesController {
  constructor(private readonly animesService: AnimesService) {}

  @UseGuards(AuthGuard())
  @Post('create')
  create(@Body() createAnimeDto: CreateAnimeDto): Promise<Anime> {
    return this.animesService.create(createAnimeDto);
  }

  @Get('lista')
  findAll(): Promise<Anime[]> {
    return this.animesService.findAll();
  }

  @Get('findUnique/:id')
  findOne(@Param('id') id: string): Promise<Anime> {
    return this.animesService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateAnimeDto: UpdateAnimeDto,
  ): Promise<Anime> {
    return this.animesService.update(id, updateAnimeDto);
  }

  @UseGuards(AuthGuard())
  @Delete('delete/:id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.animesService.remove(id);
  }
}
