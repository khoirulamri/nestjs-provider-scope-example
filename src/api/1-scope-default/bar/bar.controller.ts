import { Controller, Get } from '@nestjs/common';
import { BarService } from './bar.service';

@Controller('scope-default/bar')
export class BarController {
  constructor(private readonly barService: BarService) {}

  @Get()
  async call(): Promise<string> {
    return this.barService.call();
  }
}
