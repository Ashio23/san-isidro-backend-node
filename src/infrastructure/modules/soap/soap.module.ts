import { SoapUseCase } from '@domain/soap';
import { SOAP_ADAPTER } from '@domain/soap/port';
import { Module } from '@nestjs/common';
import { SoapController } from './soap.controller';
import { SoapService } from './soap.service';

@Module({
  controllers: [SoapController],
  providers: [
    SoapUseCase,
    {
      provide: SOAP_ADAPTER,
      useClass: SoapService,
    },
  ],
})
export class SoapModule {}
