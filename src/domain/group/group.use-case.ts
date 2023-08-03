import { Inject, Injectable } from '@nestjs/common';
import { GROUP_ADAPTER, IGroupPort } from './port';

@Injectable()
export class GroupsUseCase {
  constructor(
    @Inject(GROUP_ADAPTER)
    private readonly groupPort: IGroupPort,
  ) {}

  async getGroups(branchName: string): Promise<unknown> {
    return await this.groupPort.getGroups(branchName);
  }
}
