import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Get,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from 'src/auth/auth-user.decorator';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('create')
  createUser(@Body() data: CreateUserDto): Promise<User> {
    return this.service.createUser(data);
  }

  @UseGuards(AuthGuard())
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto): Promise<User> {
    return this.service.update(id, data);
  }

  @UseGuards(AuthGuard())
  @Get('lista')
  findMany(): Promise<any[]> {
    return this.service.findMany();
  }

  @UseGuards(AuthGuard())
  @Get('findUnique/:id')
  findUnique(@Param('id') id: string): Promise<User> {
    return this.service.findUnique(id);
  }

  @UseGuards(AuthGuard())
  @Delete('delete/:id')
  delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.delete(id);
  }

  @UseGuards(AuthGuard())
  @Patch('addList/:id')
  addList(@AuthUser() user: User, @Param('id') animeId: string) {
    return this.service.addList(user, animeId);
  }
}
