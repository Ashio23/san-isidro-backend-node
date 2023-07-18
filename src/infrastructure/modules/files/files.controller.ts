import { Controller, Get, HttpStatus, Logger, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { FILES_API_TAG, FAQS_FILE_PATH } from '@application/constants';
import { GetFileUseCase } from '@domain/files';
import { GetFileDto } from './dto';
import { RequestGetFileDto } from './dto/request-get-file-dto';

@ApiTags(FILES_API_TAG)
@Controller(FAQS_FILE_PATH.root)
export class FileController {
  private readonly logger = new Logger(FileController.name);
  constructor(private readonly getFile: GetFileUseCase) {}

  @Get(FAQS_FILE_PATH.get.path)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'File Url',
    type: GetFileDto,
  })
  @ApiOperation({
    summary:
      'The corresponding file is brought according to the name provided.',
  })
  file(
    @Param(FAQS_FILE_PATH.get.params.fileName)
    fileName: RequestGetFileDto,
  ): GetFileDto {
    Logger.log(fileName);
    return this.getFile.filename(fileName);
  }
}
