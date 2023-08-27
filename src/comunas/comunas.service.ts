import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateComunaDto } from './dto/create-comuna.dto';
import { Comuna } from './entities/comuna.entity';

@Injectable()
export class ComunasService {

    constructor(
        @InjectModel( Comuna.name ) 
        private comunaModel: Model<Comuna>
    ) {}

    async create(createComunaDto: CreateComunaDto): Promise<Comuna> {

        try {
            
            const { ...comunaData } = createComunaDto;
            
            const newComuna = new this.comunaModel({
                ...comunaData
            });
            
            await newComuna.save();
            const { ...comuna } = newComuna.toJSON();
            
            return comuna;
             
        } catch (error) {
            if( error.code === 11000 ) {
            throw new BadRequestException(`${ createComunaDto.codigo } already exists!`)
            }
            throw new InternalServerErrorException('Something terribe happen!!!');
        }

    }

    async findUserById( id: string ) {
        const comuna = await this.comunaModel.findById( id ); 
        return comuna.toJSON();
    }

    async findAll(): Promise<Comuna[]> {
        return this.comunaModel.find();
    }

}
