import { Inject, Injectable } from '@nestjs/common';
import { BRANCH_ADAPTER, IBranchPort } from './port';
import { Branch } from './dto';

@Injectable()
export class BranchesUseCase {
  constructor(
    @Inject(BRANCH_ADAPTER)
    private readonly branchPort: IBranchPort,
  ) {}

  async getBranches(): Promise<Branch[]> {
    return this.branchPort.getBranches();
  }
}
