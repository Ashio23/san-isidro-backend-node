import { RequestGetFileData } from '@domain/files';
import { IsNotEmpty, IsString } from 'class-validator';
export class RequestGetFileDto implements RequestGetFileData {
  @IsNotEmpty()
  @IsString()
  fileName: string;
}
