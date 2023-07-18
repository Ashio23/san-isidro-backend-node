import { Module } from '@nestjs/common';
import { HealthModule } from './health';
import { PostExampleModule } from './example';
import { FileModule } from './files/files.module';

@Module({
  imports: [HealthModule, PostExampleModule, FileModule],
})
export class ModulesModule {}
