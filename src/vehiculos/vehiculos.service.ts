import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';

import * as bcryptjs from 'bcryptjs';

import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { Vehiculo } from './entities/vehiculo.entity';

//import { JwtPayload } from './interfaces/jwt-payload';
//import { LoginResponse } from './interfaces/login-response';

@Injectable()
export class VehiculosService {


    constructor(
        @InjectModel( Vehiculo.name ) 
        private vehiculoModel: Model<Vehiculo>,
        private jwtService: JwtService,
    ) {}

    
    async create(createVehiculoDto: CreateVehiculoDto): Promise<Vehiculo> {

        try {
            
            const { ...vehiculoData } = createVehiculoDto;
                
            const newVehiculo = new this.vehiculoModel({
            ...vehiculoData
            });

            await newVehiculo.save();
            const { ...vehiculo } = newVehiculo.toJSON();
            
            return vehiculo;
            
        } catch (error) {
            if( error.code === 11000 ) {
            throw new BadRequestException(`${ createVehiculoDto.patente } already exists!`)
            }
            throw new InternalServerErrorException('Something terribe happen!!!');
        }

    }


    async findUserById( id: string ) {
        const vehiculo = await this.vehiculoModel.findById( id ); 
        return vehiculo.toJSON();
    }


    async findAll(): Promise<Vehiculo[]> {
        return this.vehiculoModel.find();
    }

}
