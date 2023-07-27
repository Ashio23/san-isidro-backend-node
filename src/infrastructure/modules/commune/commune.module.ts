import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComunaController } from './commune.controller';
import { ComunaService } from './commune.service';
import { Comuna } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comuna])],
  controllers: [ComunaController],
  providers: [ComunaService],
  exports: [ComunaService],
})
export class CommuneModule {}
