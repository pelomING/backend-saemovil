import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { OficinasService } from './oficinas.service';
import { CreateOficinaDto } from './dto/create-oficina.dto';
import { AuthGuard } from './guards/auth.guard';
//import { LoginResponse } from './interfaces/login-response';
//import { User } from './entities/user.entity';

@Controller('oficinas')
export class OficinasController {

    constructor(private readonly oficinasService: OficinasService) {}

    @UseGuards( AuthGuard )
    @Post()
    create(@Body() createOficinaDto: CreateOficinaDto) {
      console.log(createOficinaDto);
      return this.oficinasService.create(createOficinaDto);
    }  
    
    @UseGuards( AuthGuard )
    @Get()
    findAll( @Request() req: Request ) {
      return this.oficinasService.findAll();
    }



}
