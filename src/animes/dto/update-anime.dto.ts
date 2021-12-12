import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateAnimeDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  capa: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  status: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  genero: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  personagem: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  produtora: string;
}
