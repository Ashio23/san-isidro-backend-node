import { Module } from '@nestjs/common';

import { GetFileUseCase } from '@domain/files';

import { FilesService } from './files.service';
import { FileController } from './files.controller';

@Module({
  controllers: [FileController],
  providers: [
    GetFileUseCase,
    {
      provide: 'FilePort',
      useClass: FilesService,
    },
  ],
})
export class FileModule {}
