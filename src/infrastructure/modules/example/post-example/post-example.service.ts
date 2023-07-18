import { BadRequestException, Injectable } from '@nestjs/common';
import { PayloadExampleDataDto } from './dto';
import { ResponsePostExampleDto } from './dto';
import { PostExamplePort } from '@domain/example';

@Injectable()
export class PostExampleService implements PostExamplePort {
  addData(data: PayloadExampleDataDto): ResponsePostExampleDto {
    if (data.key !== '1') throw new BadRequestException();
    return { status: 'success', message: 'Ejemplo creado exitosamente' };
  }
}
