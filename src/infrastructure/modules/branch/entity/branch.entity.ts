import { Branch } from '@domain/branch/dto';

export class BranchResponseDto implements Branch {
  id: string;
  name: string;
}
