import { Inject, Injectable } from '@nestjs/common';
import { GET_COMMUNE_ADAPTER, ICommunePort } from './port/get-commune.port';

@Injectable()
export class GetCommuneUseCase implements ICommunePort {
  constructor(
    @Inject(GET_COMMUNE_ADAPTER)
    private readonly communePort: ICommunePort,
  ) {}

  getCommune(): Promise<unknown> {
    return this.communePort.getCommune();
  }
}
