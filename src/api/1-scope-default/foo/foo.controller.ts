import { Controller, Get } from '@nestjs/common';
import { FooService } from './foo.service';

@Controller('scope-default/foo')
export class FooController {
  constructor(private readonly fooService: FooService) {}

  @Get('call1')
  async call1(): Promise<string> {
    return this.fooService.call1();
  }

  @Get('call2')
  call2(): string {
    return this.fooService.call2();
  }
}
