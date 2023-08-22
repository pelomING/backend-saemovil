import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateOficinaDto } from './dto/create-oficina.dto';
import { Oficina } from './entities/oficina.entity';

@Injectable()
export class OficinasService {

    constructor(
        @InjectModel( Oficina.name ) 
        private oficinaModel: Model<Oficina>
    ) {}

    async create(createOficinaDto: CreateOficinaDto): Promise<Oficina> {

        try {
            
            const { ...oficinaData } = createOficinaDto;
            
            const newOficina = new this.oficinaModel({
                ...oficinaData
            });
            
            await newOficina.save();
            const { ...oficina } = newOficina.toJSON();
            
            return oficina;
             
        } catch (error) {
            if( error.code === 11000 ) {
            throw new BadRequestException(`${ createOficinaDto.codigo } already exists!`)
            }
            throw new InternalServerErrorException('Something terribe happen!!!');
        }

    }

    async findUserById( id: string ) {
        const oficina = await this.oficinaModel.findById( id ); 
        return oficina.toJSON();
    }

    async findAll(): Promise<Oficina[]> {
        return this.oficinaModel.find();
    }

}
