import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethodController } from './payment-method.controller';
import { PaymentMethodService } from './payment-method.service';
import { PaymentMethodDto } from './entity';
@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethodDto])],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
  exports: [PaymentMethodService],
})
export class PaymentMethodModule {}
