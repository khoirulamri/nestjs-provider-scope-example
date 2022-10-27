# 3. Injectable dengan scope request
```
Injectable({ scope: Scope.REQUEST })
class Service {}
```

pada scope request class service injectable akan dibangkitkan 1 kali per masing - masing request.

## Ujicoba

### Request 1 (terdapat sleep 5s)
```
curl --request GET http://localhost:3000/scope-request/foo/call1
```

### request 2
```
curl --request GET http://localhost:3000/scope-request/foo/call2
```

### request 3
```
curl --request GET http://localhost:3000/scope-request/bar
```

Skenario:
1. Lakukan hit request 1, request 2 dan 3 secara bergantian setelah mendapatkan response
2. Lakukan hit request 1 dn request 2 secara bersamaan
2. Lakukan hit request 1 dn request 3 secara bersamaan


Kesimpulan:
1. Lihat log pada saat running aplikasi, log `== initialize sharing service on scope request ==` akan muncul sesuai request yang masuk
```
[Nest] - LOG [NestFactory] Starting Nest application...
[Nest] - LOG [InstanceLoader] AppModule 
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
== initialize sharing service on scope request ==
== initialize sharing service on scope request ==
```
2. ketika melakukan skenario 1, response yang diberikan sesuai dengan input dari service pemanggil
3. ketika melakukan skenario 2, response yang diberikan sesuai dengan input dari service
4. ketika melakukan skenario 3, response yang diberikan sesuai dengan input dari service
