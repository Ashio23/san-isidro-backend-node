import { GROUP_ADAPTER, GroupsUseCase } from '@domain/group';
import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';

@Module({
  controllers: [GroupController],
  providers: [
    GroupsUseCase,
    {
      provide: GROUP_ADAPTER,
      useClass: GroupService,
    },
  ],
})
export class GroupModule {}
