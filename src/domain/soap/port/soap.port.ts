import { ISoapDto } from '../dto';

export const SOAP_ADAPTER = 'soapAdapter';

export interface SoapPort {
  importFiles(args: ISoapDto): Promise<unknown>;
}
