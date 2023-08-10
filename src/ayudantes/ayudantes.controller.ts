import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AyudantesService } from './ayudantes.service';
import { CreateAyudanteDto } from './dto/create-ayudante.dto';
import { AuthGuard } from './guards/auth.guard';

@Controller('ayudantes')
export class AyudantesController {

    constructor(private readonly ayudantesService: AyudantesService) {}

    @UseGuards( AuthGuard )
    @Post()
    create(@Body() createAyudanteDto: CreateAyudanteDto) {
      console.log(createAyudanteDto);
      return this.ayudantesService.create(createAyudanteDto);
    }  

    @UseGuards( AuthGuard )
    @Get('/find-all')
    findAll( @Request() req: Request ) {
      return this.ayudantesService.findAll();
    }

}
