ofetch API

https://www.npmjs.com/package/ofetch

常规`get`请求
```
await ofetch('/movie?lang=en', { query: { id: 123 } })

```

`POST`, `PUT` 等请求, 无需再把body转成JSON.stringify

```
const { users } = await ofetch('/api/users', { method: 'POST', body: { some: 'json' } })

```
