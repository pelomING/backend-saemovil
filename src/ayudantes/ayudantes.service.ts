import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { validate } from 'class-validator';

import * as bcryptjs from 'bcryptjs';

import { CreateAyudanteDto } from './dto/create-ayudante.dto';
import { Ayudante } from './entities/ayudante.entity';

//import { JwtPayload } from './interfaces/jwt-payload';
//import { LoginResponse } from './interfaces/login-response';

@Injectable()
export class AyudantesService {


    constructor(
        @InjectModel( Ayudante.name ) 
        private ayudanteModel: Model<Ayudante>,
        private jwtService: JwtService,
    ) {}

    async create(createAyudanteDto: CreateAyudanteDto): Promise<Ayudante> {

        try {
            
            const errors = await validate(createAyudanteDto);

            if (errors.length > 0) {
                throw new BadRequestException(errors);
            }

            const { ...ayudanteData } = createAyudanteDto;
            
            const newAyudante = new this.ayudanteModel({
                ...ayudanteData
            });
            
            await newAyudante.save();
            const { ...ayudante } = newAyudante.toJSON();
            
            return ayudante;
            
        } catch (error) {
            if( error.code === 11000 ) {
            throw new BadRequestException(`${ createAyudanteDto.rut_ayudante } already exists!`)
            }
            throw new InternalServerErrorException('Something terribe happen!!!');
        }

    }

    async findUserById( id: string ) {
        const evento = await this.ayudanteModel.findById( id ); 
        return evento.toJSON();
    }

    findAll(): Promise<Ayudante[]> {
        return this.ayudanteModel.find();
    }

}
