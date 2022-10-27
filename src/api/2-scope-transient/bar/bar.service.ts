import { Injectable } from '@nestjs/common';
import { SharingService } from '../sharing/sharing.service';

@Injectable()
export class BarService {
  constructor(private readonly sharingService: SharingService) {}
  call(): string {
    this.sharingService.setX('call bar - ' + new Date().getTime());

    return this.sharingService.getX();
  }
}
