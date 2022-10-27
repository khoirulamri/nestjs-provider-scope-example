import { Module } from '@nestjs/common';
import { BarController } from './bar.controller';
import { BarService } from './bar.service';
import { SharingModule } from '../sharing/sharing.module';

@Module({
  imports: [SharingModule],
  controllers: [BarController],
  providers: [BarService],
})
export class BarModule {}
