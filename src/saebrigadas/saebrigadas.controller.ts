import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { SaeBrigadasService } from './saebrigadas.service';

//import { CreateTurnoDto } from './dto/create-turno.dto';
import { AuthGuard } from './guards/auth.guard';
//import { LoginResponse } from './interfaces/login-response';
//import { User } from './entities/user.entity';


@Controller('saebrigadas')
export class SaeBrigadasController {

    constructor(private readonly saeBrigadasService: SaeBrigadasService) {}

    // @UseGuards( AuthGuard )
    // @Post()
    // create(@Body() createTurnoDto: CreateTurnoDto) {
    //   console.log(createTurnoDto);
    //   return this.turnosService.create(createTurnoDto);
    // }  


    @UseGuards( AuthGuard )
    @Get('/find-all')
    findAll( @Request() req: Request ) {
      return this.saeBrigadasService.findAll();
    }

}
