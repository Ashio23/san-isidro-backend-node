import { Branch } from '../dto';

export const BRANCH_ADAPTER = 'branchAdapter';
export interface IBranchPort {
  getBranches(): Promise<Branch[]>;
}
