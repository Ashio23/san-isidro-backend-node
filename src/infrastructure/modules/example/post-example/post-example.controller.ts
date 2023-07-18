import { Controller, Post, Body } from '@nestjs/common';
import { PayloadExampleDataDto } from './dto';
import { PostExampleUseCase } from '@domain/example';

@Controller('post-example')
export class PostExampleController {
  constructor(private readonly postPortUseCase: PostExampleUseCase) {}

  @Post()
  addData(@Body() data: PayloadExampleDataDto) {
    return this.postPortUseCase.addData(data);
  }
}
