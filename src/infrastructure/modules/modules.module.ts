import { Module } from '@nestjs/common';
import { HealthModule } from './health';
import { PostExampleModule } from './example';
import { PaymentMethodsModule } from './payment-method/payment-method.module';
import { DocumentModule } from './document/document.module';
import { CommuneModule } from './commune/commune.module';
import { ClientModule } from './client/client.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    HealthModule,
    PostExampleModule,
    PaymentMethodsModule,
    DocumentModule,
    CommuneModule,
    ClientModule,
    InvoiceModule,
  ],
})
export class ModulesModule {}
