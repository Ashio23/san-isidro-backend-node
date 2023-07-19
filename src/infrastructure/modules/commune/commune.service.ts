import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comuna } from './entity';

@Injectable()
export class ComunaService {
  constructor(
    @InjectRepository(Comuna)
    private comunaRepository: Repository<Comuna>,
  ) {}

  async findDistinct(): Promise<Comuna[]> {
    return this.comunaRepository.find();
  }
}
