import { Injectable } from '@nestjs/common';
import { Client, createClientAsync } from 'soap';
import { EnvironmentService } from '@infrastructure/application';
import { SoapPort } from '@domain/soap/port';
import { SoapRequestDto } from './dto/soap-payload.dto';

@Injectable()
export class SoapService implements SoapPort {
  private url: string;
  private apiKey: string;
  private siiResolution: number;
  private companyId: number;

  constructor(private environmentService: EnvironmentService) {
    this.url = this.environmentService.get('SOAP_URL');
    this.apiKey = this.environmentService.get('SOAP_API_KEY');
    this.siiResolution = this.environmentService.get('SII_RESOLUTION');
    this.companyId = this.environmentService.get('COMPANY_ID');
  }

  async importFiles(args: SoapRequestDto): Promise<unknown> {
    const client: Client = await createClientAsync(this.url);

    const xml = `
      <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:proc="http://processimportacion.webservices.dte.azurian.com" xmlns:xsd="http://processimportacion.webservices.dte.azurian.com/xsd">
        <soap:Header/>
        <soap:Body>
          <proc:importarDocumentos>
            <proc:request>
              <xsd:apiKey>${this.apiKey}</xsd:apiKey>
              <xsd:archivo>${args.file}</xsd:archivo>
              <xsd:data>${args.data}</xsd:data>
              <xsd:resolucionSii>${this.siiResolution}</xsd:resolucionSii>
              <xsd:rutEmpresa>${this.companyId}</xsd:rutEmpresa>
            </proc:request>
          </proc:importarDocumentos>
        </soap:Body>
      </soap:Envelope>`;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return client.importarDocumentosAsync({ _: xml });
  }
}
