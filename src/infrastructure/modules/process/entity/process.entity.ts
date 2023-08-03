import { ProcessDto } from '@domain/process/dto';

export class ProcessResponseDto implements ProcessDto {
  id: string;
  process: string;
}
