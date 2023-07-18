import { PayloadExampleData } from '@domain/example';
import { IsNotEmpty } from 'class-validator';

export class PayloadExampleDataDto implements PayloadExampleData {
  @IsNotEmpty()
  key: string;
  @IsNotEmpty()
  value: string;
}
