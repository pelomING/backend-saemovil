import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { AuthGuard } from './guards/auth.guard';
//import { LoginResponse } from './interfaces/login-response';
//import { User } from './entities/user.entity';


@Controller('turnos')
export class TurnosController {

    constructor(private readonly turnosService: TurnosService) {}

    @UseGuards( AuthGuard )
    @Post()
    create(@Body() createTurnoDto: CreateTurnoDto) {
      console.log(createTurnoDto);
      return this.turnosService.create(createTurnoDto);
    }  


    @UseGuards( AuthGuard )
    @Get()
    findAll( @Request() req: Request ) {
      return this.turnosService.findAll();
    }


}
