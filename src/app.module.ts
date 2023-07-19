import { ClientModule } from './infrastructure/modules/client/client.module';
import { CommuneModule } from './infrastructure/modules/commune/commune.module';
import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure';

@Module({
  imports: [ClientModule, CommuneModule, InfrastructureModule],
})
export class AppModule {}
