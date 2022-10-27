import { Module } from '@nestjs/common';
import { ScopeDefaultModule } from './api/1-scope-default/root.module';
import { ScopeTransientModule } from './api/2-scope-transient/root.module';
import { ScopeRequestModule } from './api/3-scope-request/root.module';

@Module({
  imports: [ScopeDefaultModule, ScopeTransientModule, ScopeRequestModule],
})
export class AppModule {}
