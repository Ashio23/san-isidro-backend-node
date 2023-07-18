import { Global, Module } from '@nestjs/common';
import axios from 'axios';
import { HTTP_ADAPTER } from './http';
import { AXIOS_INSTANCE, AxiosAdapterService } from './http/axios';

@Global()
@Module({
  providers: [
    { provide: AXIOS_INSTANCE, useValue: axios.create() },
    { provide: HTTP_ADAPTER, useClass: AxiosAdapterService },
  ],
  exports: [HTTP_ADAPTER],
})
export class AdaptersModule {}
