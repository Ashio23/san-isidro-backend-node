import { Module } from '@nestjs/common';
import { HealthModule } from './health';
import { PaymentMethodsModule } from './payment-method';
import { DocumentModule } from './document';
import { CommuneModule } from './commune';
import { ClientModule } from './client';
import { InvoiceModule } from './invoice';
import { PaymentDocumentModule } from './payment-document';
import { GroupModule } from './group';
import { BranchModule } from './branch';
import { ProcessModule } from './process';
import { ProcessStatusModule } from './process-status';
import { ScheduleSendProcessModule } from './schedule-send-process';
import { SoapModule } from './soap/soap.module';
import { RouteModule } from './route';
import { FolioModule } from './folio';

@Module({
  imports: [
    HealthModule,
    PaymentMethodsModule,
    DocumentModule,
    CommuneModule,
    ClientModule,
    InvoiceModule,
    PaymentDocumentModule,
    GroupModule,
    BranchModule,
    ProcessModule,
    ProcessStatusModule,
    ScheduleSendProcessModule,
    SoapModule,
    RouteModule,
    FolioModule,
  ],
})
export class ModulesModule {}
