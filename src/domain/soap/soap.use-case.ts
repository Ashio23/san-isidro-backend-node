import { Inject } from '@nestjs/common';
import { SOAP_ADAPTER, SoapPort } from './port';
import { ISoapDto } from './dto';

export class SoapUseCase {
  constructor(
    @Inject(SOAP_ADAPTER)
    private readonly soapPort: SoapPort,
  ) {}

  async importFiles(args: ISoapDto): Promise<unknown> {
    return await this.soapPort.importFiles(args);
  }
}
