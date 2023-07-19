import { PaymentMethodModule } from './infrastructure/modules/payment-method/payment-method.module';
import { DocumentModule } from './infrastructure/modules/document/document.module';
import { ClientModule } from './infrastructure/modules/client/client.module';
import { CommuneModule } from './infrastructure/modules/commune/commune.module';
import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure';

@Module({
  imports: [
    PaymentMethodModule,
    DocumentModule,
    ClientModule,
    CommuneModule,
    InfrastructureModule,
  ],
})
export class AppModule {}
