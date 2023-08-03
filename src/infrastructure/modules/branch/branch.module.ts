import { BranchesUseCase } from '@domain/branch/branch.use-case';
import { BRANCH_ADAPTER } from '@domain/branch/port';
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
