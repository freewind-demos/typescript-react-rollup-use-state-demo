JavaScript React Rollup "useState" Demo
=======================================

Not sure why the code can't be bundled by rollup.

```
npm install
npm run demo
```

It will fail with error: 

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

If we want to fix it, we have to remove `resolve()` from `rollup.config.js`, 
but which is required in my real project.

What's the error cause and how to fix it?
