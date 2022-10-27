import { Module } from '@nestjs/common';
import { BarModule } from './bar/bar.module';
import { FooModule } from './foo/foo.module';

@Module({
  imports: [FooModule, BarModule],
})
export class ScopeTransientModule {}
