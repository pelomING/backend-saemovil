import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { formatInTimeZone } from '../timezone.util';

import * as bcryptjs from 'bcryptjs';

import { CreateEventoSaeDto } from './dto/create-evento-sae.dto';
import { EventoSae } from './entities/eventoSae.entity';

//import { JwtPayload } from './interfaces/jwt-payload';
//import { LoginResponse } from './interfaces/login-response';


@Injectable()
export class EventosSaeService {

    constructor(
        @InjectModel( EventoSae.name ) 
        private eventoSaeModel: Model<EventoSae>,
    
        private jwtService: JwtService,
       ) {}

    async create(createEventoSaeDto: CreateEventoSaeDto): Promise<EventoSae> {

        try {
            
            let fecha = formatInTimeZone(new Date());

            console.log("#####################################");
            console.log("Fecha Hora del Servidor",fecha);
            console.log("#####################################");
            
            const { ...eventoSaeData } = createEventoSaeDto;
                
            const newEventoSae = new this.eventoSaeModel({
            ...eventoSaeData
            });

            await newEventoSae.save();
            const { ...eventoSae } = newEventoSae.toJSON();
            
            return eventoSae;
            
        } catch (error) {

            console.error('Error en la solicitud HTTP:', error);

            if( error.code === 11000 ) {
            throw new BadRequestException(`${ createEventoSaeDto.rut_maestro } already exists!`)
            }
            throw new InternalServerErrorException('Something terribe happen!!!');
        }

    }

    async findUserById( id: string ) {
        const eventoSae = await this.eventoSaeModel.findById( id ); 
        return eventoSae.toJSON();
    }

    async findAll(): Promise<EventoSae[]> {
        return this.eventoSaeModel.find();
    }

}
