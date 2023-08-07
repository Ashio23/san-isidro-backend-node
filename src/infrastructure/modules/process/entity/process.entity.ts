import { ProcessDto } from '@domain/process';

export class ProcessResponseDto implements ProcessDto {
  id: string;
  process: string;
}
