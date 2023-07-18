import { Module } from '@nestjs/common';
import { PostExampleController } from './post-example.controller';
import { PostExampleService } from './post-example.service';
import { PostExampleUseCase, POST_EXAMPLE_ADAPTER } from '@domain/example';

@Module({
  controllers: [PostExampleController],
  providers: [
    PostExampleUseCase,
    {
      provide: POST_EXAMPLE_ADAPTER,
      useClass: PostExampleService,
    },
  ],
})
export class PostExampleModule {}
