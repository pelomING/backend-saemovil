import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { formatInTimeZone } from '../timezone.util';

import * as bcryptjs from 'bcryptjs';

import { CreateTurnoSaeDto } from './dto/create-turno-sae.dto';
import { TurnoSae } from './entities/turnoSae.entity';

//import { JwtPayload } from './interfaces/jwt-payload';
//import { LoginResponse } from './interfaces/login-response';


@Injectable()
export class TurnosSaeService {


    constructor(
        @InjectModel( TurnoSae.name ) 
        private turnoSaeModel: Model<TurnoSae>,
        private jwtService: JwtService,
       ) {}

       
       async create(createTurnoDto: CreateTurnoSaeDto): Promise<TurnoSae> {
    
        try {
          
          const { ...turnoData } = createTurnoDto;
               
          const newTurno = new this.turnoSaeModel({
            ...turnoData
          });
    
          newTurno.fecha_hora_recepcion = formatInTimeZone(new Date());

           await newTurno.save();
           const { ...turno } = newTurno.toJSON();
           
           return turno;
          
        } catch (error) {

          console.error('Error en la solicitud HTTP:', error);
          
          if( error.code === 11000 ) {
            throw new BadRequestException(`${ createTurnoDto.rut_maestro } already exists!`)
          }
          throw new InternalServerErrorException('Something terribe happen!!!');
        }
    
      }


      async findUserById( id: string ) {
        const turno = await this.turnoSaeModel.findById( id ); 
        return turno.toJSON();
      }


      async findAll(): Promise<TurnoSae[]> {
        return this.turnoSaeModel.find();
      }

}
