import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import * as bcryptjs from 'bcryptjs';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { Turno } from './entities/turno.entity';

//import { JwtPayload } from './interfaces/jwt-payload';
//import { LoginResponse } from './interfaces/login-response';

@Injectable()
export class TurnosService {

    constructor(
        @InjectModel( Turno.name ) 
        private turnoModel: Model<Turno>,

        private jwtService: JwtService,
    ) {}
 
    
    async create(createTurnoDto: CreateTurnoDto): Promise<Turno> {

        try {
            
            const { ...turnoData } = createTurnoDto;
                
            const newTurno = new this.turnoModel({
                ...turnoData
            });

            await newTurno.save();
            const { ...turno } = newTurno.toJSON();
            
            return turno;
            
        } catch (error) {
            if( error.code === 11000 ) {
            throw new BadRequestException(`${ createTurnoDto.codigo } already exists!`)
            }
            throw new InternalServerErrorException('Something terribe happen!!!');
        }

    }


    async findUserById( id: string ) {
        const turno = await this.turnoModel.findById( id ); 
        return turno.toJSON();
    }


    async findAll(): Promise<Turno[]> {
        return this.turnoModel.find();
    }

}
