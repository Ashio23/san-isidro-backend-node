import { DocumentDto } from '@domain/Document/dto';

export class DocumentResponseDto implements DocumentDto {
  id: string;
  description: string;
}
