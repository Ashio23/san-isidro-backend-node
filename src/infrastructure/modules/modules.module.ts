import { Module } from '@nestjs/common';
import { HealthModule } from './health';
import { PostExampleModule } from './example';

@Module({
  imports: [HealthModule, PostExampleModule],
})
export class ModulesModule {}
