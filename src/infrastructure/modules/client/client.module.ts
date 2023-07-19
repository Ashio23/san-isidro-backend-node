import { Module } from '@nestjs/common';
import { ClienteController } from './client.controller';
import { ClienteService } from './client.service';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClientModule {}
