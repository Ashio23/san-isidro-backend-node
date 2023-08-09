import { ISoapDto } from '@domain/soap/dto';

export class SoapRequestDto implements ISoapDto {
  file: string;
  data: string;
}
