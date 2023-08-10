import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { AuthGuard } from './guards/auth.guard';
//import { LoginResponse } from './interfaces/login-response';
//import { User } from './entities/user.entity';

@Controller('vehiculos')
export class VehiculosController {

    constructor(private readonly vehiculosService: VehiculosService) {}

    @UseGuards( AuthGuard )
    @Post()
    create(@Body() createVehiculoDto: CreateVehiculoDto) {
      console.log(createVehiculoDto);
      return this.vehiculosService.create(createVehiculoDto);
    }  

    @UseGuards( AuthGuard )
    @Get()
    findAll( @Request() req: Request ) {
      return this.vehiculosService.findAll();
    }

}
