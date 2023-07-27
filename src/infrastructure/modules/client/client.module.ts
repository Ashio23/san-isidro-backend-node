import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteService } from './client.service';
import { Client } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClienteService],
  exports: [ClienteService],
})
export class ClientModule {}
