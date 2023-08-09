import { SoapUseCase } from '@domain/soap';
import { Controller, Post, Body } from '@nestjs/common';
import { SoapRequestDto } from './dto/soap-payload.dto';

@Controller('soap')
export class SoapController {
  constructor(private readonly soapUseCase: SoapUseCase) {}

  @Post('call')
  async callSoapMethod(@Body() args: SoapRequestDto): Promise<unknown> {
    return await this.soapUseCase.importFiles(args);
  }
}
