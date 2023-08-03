import { Module } from '@nestjs/common';
import { HealthModule } from './health';
import { PostExampleModule } from './example';
import { PaymentMethodsModule } from './payment-method/payment-method.module';
import { DocumentModule } from './document/document.module';
import { CommuneModule } from './commune/commune.module';
import { ClientModule } from './client/client.module';
import { InvoiceModule } from './invoice/invoice.module';
import { PaymentDocumentModule } from './payment-document/payment-document.module';
import { GroupModule } from './group/group.module';
import { BranchModule } from './branch/branch.module';
import { ProcessModule } from './process/process.module';

@Module({
  imports: [
    HealthModule,
    PostExampleModule,
    PaymentMethodsModule,
    DocumentModule,
    CommuneModule,
    ClientModule,
    InvoiceModule,
    PaymentDocumentModule,
    GroupModule,
    BranchModule,
    ProcessModule,
  ],
})
export class ModulesModule {}
