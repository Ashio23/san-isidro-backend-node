import { ResponseGetFiles } from '@domain/files';
export class GetFileDto implements ResponseGetFiles {
  url: string;
}
