Uji coba provider scope pada nestjs
reference: https://docs.nestjs.com/fundamentals/injection-scopes


Lakukan ujicoba secara bertahap dari:
1. scope default
2. scope transient
3. scope request

dengan uncomment module pada `app.module.ts`
```
@Module({
  imports: [
    ScopeDefaultModule,
    // ScopeTransientModule,
    // ScopeRequestModule,
  ],
})
export class AppModule {}

```
