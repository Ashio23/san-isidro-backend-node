import { BranchesUseCase } from '@domain/branch/branch.use-case';
import { Controller, Get } from '@nestjs/common';

@Controller('branches')
export class BranchController {
  constructor(private readonly branchesUseCase: BranchesUseCase) {}

  @Get()
  async getBranches() {
    return await this.branchesUseCase.getBranches();
  }
}
