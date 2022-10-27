import { Injectable } from '@nestjs/common';
import { SharingService } from './../sharing/sharing.service';

@Injectable()
export class FooService {
  constructor(private readonly sharingService: SharingService) {}

  async call1(): Promise<string> {
    this.sharingService.setX('call foo 1 - ' + new Date().getTime());

    // sleep
    await new Promise((rs) => setTimeout(() => rs(true), 5000));

    return this.sharingService.getX();
  }
  call2(): string {
    this.sharingService.setX('call foo 2 - ' + new Date().getTime());

    return this.sharingService.getX();
  }
}
