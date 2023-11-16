import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import * as bcryptjs from 'bcryptjs';

//import { CreateTurnoDto } from './dto/create-turno.dto';

import { TipoTurno } from './entities/tipoturno.entity';

//import { JwtPayload } from './interfaces/jwt-payload';
//import { LoginResponse } from './interfaces/login-response';

@Injectable()
export class TiposTurnosService {

    constructor(
        @InjectModel( TipoTurno.name ) 
        private tipoturnoModel: Model<TipoTurno>,
        private jwtService: JwtService,
    ) {}
 
    
    // async create(createTurnoDto: CreateTurnoDto): Promise<Turno> {

    //     try {
            
    //         const { ...turnoData } = createTurnoDto;
                
    //         const newTurno = new this.turnoModel({
    //             ...turnoData
    //         });

    //         await newTurno.save();
    //         const { ...turno } = newTurno.toJSON();
            
    //         return turno;
            
    //     } catch (error) {
    //         if( error.code === 11000 ) {
    //         throw new BadRequestException(`${ createTurnoDto.codigo } already exists!`)
    //         }
    //         throw new InternalServerErrorException('Something terribe happen!!!');
    //     }

    // }


    async findUserById( id: string ) {
        const turno = await this.tipoturnoModel.findById( id ); 
        return turno.toJSON();
    }


    async findAll(): Promise<TipoTurno[]> {
        return this.tipoturnoModel.find();
    }

}
