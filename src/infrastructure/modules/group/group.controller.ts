import { GroupsUseCase } from '@domain/group';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('groups')
export class GroupController {
  constructor(private readonly getGroupsUseCase: GroupsUseCase) {}

  @Get()
  async getGroups(@Query('branchName') branchName: string) {
    return await this.getGroupsUseCase.getGroups(branchName);
  }
}
