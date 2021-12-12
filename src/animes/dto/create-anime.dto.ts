import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAnimeDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  capa: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  genero: string;

  @IsString()
  @IsNotEmpty()
  personagem: string;

  @IsString()
  @IsNotEmpty()
  produtora: string;
}
