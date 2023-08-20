import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { TurnosSaeService } from './turnos_sae.service';
import { CreateTurnoSaeDto } from './dto/create-turno-sae.dto';
import { AuthGuard } from './guards/auth.guard';
//import { LoginResponse } from './interfaces/login-response';
//import { User } from './entities/user.entity';

@Controller('turnos-sae')
export class TurnosSaeController {

    constructor(private readonly turnosSaeService: TurnosSaeService) {}

    @UseGuards( AuthGuard )
    @Post()
    create(@Body() createTurnoDto: CreateTurnoSaeDto) {
      console.log(createTurnoDto);
      return this.turnosSaeService.create(createTurnoDto);
    }  

    @UseGuards( AuthGuard )
    @Get('/find-all')
    findAll( @Request() req: Request ) {
      return this.turnosSaeService.findAll();
    }

}
