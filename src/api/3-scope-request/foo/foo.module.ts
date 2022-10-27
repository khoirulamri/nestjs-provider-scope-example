import { Module } from '@nestjs/common';
import { FooController } from './foo.controller';
import { FooService } from './foo.service';
import { SharingModule } from '../sharing/sharing.module';

@Module({
  imports: [SharingModule],
  controllers: [FooController],
  providers: [FooService],
})
export class FooModule {}
