import { Inject, Injectable } from '@nestjs/common';
import { PostExamplePort, POST_EXAMPLE_ADAPTER } from './port';
import { PayloadExampleData } from './dto';

@Injectable()
export class PostExampleUseCase {
  constructor(
    @Inject(POST_EXAMPLE_ADAPTER)
    private readonly postExamplePort: PostExamplePort,
  ) {}

  addData(data: PayloadExampleData) {
    return this.postExamplePort.addData(data);
  }
}
