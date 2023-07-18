import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { GetFileDto } from './dto';
import { GetFilePort } from '@domain/files';
import { FileName } from '@infrastructure/application/constants';
import { RequestGetFileDto } from './dto/request-get-file-dto';

@Injectable()
export class FilesService implements GetFilePort {
  constructor(private readonly configService: ConfigService) {}

  getFile(data: RequestGetFileDto): GetFileDto {
    const externalPath: string =
      this.configService.get('CLOUD_FRONT_URL') || '';
    const filename: string = FileName[data];
    const url = `${externalPath}/files/${filename}`;
    return { url };
  }
}
