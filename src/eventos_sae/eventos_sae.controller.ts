import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { EventosSaeService } from './eventos_sae.service';
import { CreateEventoSaeDto } from './dto/create-evento-sae.dto';
import { AuthGuard } from './guards/auth.guard';
//import { LoginResponse } from './interfaces/login-response';
//import { User } from './entities/user.entity';

@Controller('eventos-sae')
export class EventosSaeController {

    constructor(private readonly eventosSaeService: EventosSaeService) {}

    @UseGuards( AuthGuard )
    @Post()
    create(@Body() createEventoSaeDto: CreateEventoSaeDto)  {
      console.log(createEventoSaeDto);
      return this.eventosSaeService.create(createEventoSaeDto);
    }  

    @UseGuards( AuthGuard )
    @Get('/find-all')
    findAll( @Request() req: Request ) {
      return this.eventosSaeService.findAll();
    }

}
