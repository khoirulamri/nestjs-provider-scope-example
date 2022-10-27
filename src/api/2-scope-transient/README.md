# 2. Injectable dengan scope transient
```
Injectable({ scope: Scope.TRANSIENT })
class Service {}
```

pada scope transient class service injectable akan dibangkitkan 1 kali per masing - masing class yang mengimport.

## Ujicoba

### Request 1 (terdapat sleep 5s)
```
curl --request GET http://localhost:3000/scope-transient/foo/call1
```

### request 2
```
curl --request GET http://localhost:3000/scope-transient/foo/call2
```

### request 3
```
curl --request GET http://localhost:3000/scope-transient/bar
```

Skenario:
1. Lakukan hit request 1, request 2 dan 3 secara bergantian setelah mendapatkan response
2. Lakukan hit request 1 dn request 2 secara bersamaan
2. Lakukan hit request 1 dn request 3 secara bersamaan


Kesimpulan:
1. Lihat log pada saat running aplikasi, akan muncul log `== initialize sharing service on scope transient ==` sejumlah 2x. Hal ini karena `SharingService` di import / di consume oleh 2 service
```
[Nest] - LOG [NestFactory] Starting Nest application...
== initialize sharing service on scope transient ==
[Nest] - LOG [InstanceLoader] AppModule 
== initialize sharing service on scope transient ==
[Nest] - LOG [InstanceLoader] AppModule dependencies initialized +40ms
[Nest] - LOG [InstanceLoader] ScopeDefaultModule dependencies initialized +1ms
[Nest] - LOG [InstanceLoader] SharingModule dependencies initialized +0ms
[Nest] - LOG [InstanceLoader] BarModule dependencies initialized +1ms
[Nest] - LOG [InstanceLoader] FooModule dependencies initialized +1ms
[Nest] - LOG [RoutesResolver] FooController {/scope-default/foo}: +5ms
[Nest] - LOG [RouterExplorer] Mapped {/scope-default/foo/call1, GET} route +3ms
[Nest] - LOG [RouterExplorer] Mapped {/scope-default/foo/call2, GET} route +2ms
[Nest] - LOG [RoutesResolver] BarController {/scope-default/bar}: +0ms
[Nest] - LOG [RouterExplorer] Mapped {/scope-default/bar, GET} route +1ms
[Nest] - LOG [NestApplication] Nest application successfully started +5ms
```
2. ketika melakukan skenario 1, response yang diberikan sesuai dengan input dari service pemanggil
```
# response request 1
call foo 1 - xxxxxxxxx
# response request 2
call foo 2 - xxxxxxxxx
# response request 3
call bar - xxxxxxxxx
```
3. ketika melakukan skenario 2, response yang diberikan oleh request 2 sesuai namun response yang diberikan request 1 beriisi response request 2, hal ini menandakan x pada sharing service request ke 1 direplace oleh request ke 2
```
# response request 2
call foo 2 - xxxxxxxxx
# response request 1
call foo 2 - xxxxxxxxx
```
4. ketika melakukan skenario 3, response yang diberikan oleh request 1 sesuai dan response yang diberikan request 3 juga sesuai, hal ini menandakan SharingService hanya di share pada consumer dimasing-masing module
```
# response request 3
call bar - xxxxxxxxx
# response request 1
call foo 1 - xxxxxxxxx
```
