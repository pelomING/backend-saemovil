import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { OficinasService } from './comunas.service';
import { CreateComunaDto } from './dto/create-comuna.dto';
import { AuthGuard } from './guards/auth.guard';
//import { LoginResponse } from './interfaces/login-response';
//import { User } from './entities/user.entity';

@Controller('Comunas')
export class ComunasController {

    constructor(private readonly comunasService: ComunasService) {}

    @UseGuards( AuthGuard )
    @Post()
    create(@Body() createComunaDto: CreateComunaDto) {
      console.log(createComunaDto);
      return this.comunasService.create(createComunaDto);
    }  
    
    @UseGuards( AuthGuard )
    @Get('/find-all')
    findAll( @Request() req: Request ) {
      return this.comunasService.findAll();
    }

}
