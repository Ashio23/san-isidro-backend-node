import { BRANCH_ADAPTER, BranchesUseCase } from '@domain/branch';
import { Module } from '@nestjs/common';
import { BranchController } from './branch.controller';
import { BranchService } from './branch.service';

@Module({
  controllers: [BranchController],
  providers: [
    BranchesUseCase,
    {
      provide: BRANCH_ADAPTER,
      useClass: BranchService,
    },
  ],
})
export class BranchModule {}
