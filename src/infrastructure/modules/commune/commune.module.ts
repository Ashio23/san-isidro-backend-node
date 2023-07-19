import { Module } from '@nestjs/common';
import { ComunaController } from './commune.controller';
import { ComunaService } from './commune.service';

@Module({
  controllers: [ComunaController],
  providers: [ComunaService],
})
export class CommuneModule {}
