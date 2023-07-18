// import { AppError, FilesInternalErrors } from '@domain/shared/errors';

import { Inject, Injectable } from '@nestjs/common';
import { GetFilePort } from './port';
import { RequestGetFileData } from './dto';

@Injectable()
export class GetFileUseCase {
  constructor(
    @Inject('FilePort')
    private readonly fileService: GetFilePort,
  ) {}
  filename(fileName: RequestGetFileData) {
    return this.fileService.getFile(fileName);
    // if (response === FilesInternalErrors.NOT_FOUND_FILE.code) {
    //   throw new AppError(
    //     InternalErrorType.NOT_FOUND_ENTITY,
    //     FilesInternalErrors.NOT_FOUND_FILE,
    //   );
    // }
    // return response;
  }
}
