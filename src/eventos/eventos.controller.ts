import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { AuthGuard } from './guards/auth.guard';
//import { LoginResponse } from './interfaces/login-response';
//import { User } from './entities/user.entity';

@Controller('eventos')
export class EventosController {

    constructor(private readonly eventosService: EventosService) {}

    @UseGuards( AuthGuard )
    @Post()
    create(@Body() createEventoDto: CreateEventoDto) {
      console.log(createEventoDto);
      return this.eventosService.create(createEventoDto);
    }  
    
    @UseGuards( AuthGuard )
    @Get()
    findAll( @Request() req: Request ) {
      return this.eventosService.findAll();
    }

}
