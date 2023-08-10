import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';

import * as bcryptjs from 'bcryptjs';

import { CreateEventoDto } from './dto/create-evento.dto';
import { Evento } from './entities/evento.entity';

//import { JwtPayload } from './interfaces/jwt-payload';
//import { LoginResponse } from './interfaces/login-response';

@Injectable()
export class EventosService {


    constructor(
        @InjectModel( Evento.name ) 
        private eventoModel: Model<Evento>,

        private jwtService: JwtService,
    ) {}


    async create(createEventoDto: CreateEventoDto): Promise<Evento> {

        try {
            
            const { ...eventoData } = createEventoDto;
            
            const newEvento = new this.eventoModel({
                ...eventoData
            });
            
            await newEvento.save();
            const { ...evento } = newEvento.toJSON();
            
            return evento;
             
        } catch (error) {
            if( error.code === 11000 ) {
            throw new BadRequestException(`${ createEventoDto.codigo } already exists!`)
            }
            throw new InternalServerErrorException('Something terribe happen!!!');
        }

    }

    async findUserById( id: string ) {
        const evento = await this.eventoModel.findById( id ); 
        return evento.toJSON();
    }

    async findAll(): Promise<Evento[]> {
        return this.eventoModel.find();
    }

}
