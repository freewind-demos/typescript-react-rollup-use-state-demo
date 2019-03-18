JavaScript React Rollup "useState" Demo
=======================================

关键点有两个：

1. rollup.config.js中需要声明：

```
namedExports: { 'react': ['useState'] }
```

否则会报错：

```
index.ts → bundle.js...
[!] Error: 'useState' is not exported by node_modules/react/index.js
https://rollupjs.org/guide/en#error-name-is-not-exported-by-module-
index.ts (1:8)
1: import {useState} from "react";
           ^
2: 
3: console.log(useState);
Error: 'useState' is not exported by node_modules/react/index.js

```

2. 使用npm/yarn，而不是pnpm

pnpm由于使用了hard link，导致`rollup-plugin-commonjs`无法正常的定位`react`，
所以即使像上面那样声明了，依然会报错。

需要改成：

```
namedExports: {
   'node_modules/.npm-registry.compass.com/react/16.8.4/node_modules/react/index.js
': ['useState']
}
```

可以看到里面嵌入了缓存路径和版本号，不可接受。

## 运行：

```
npm install
npm run demo
```
