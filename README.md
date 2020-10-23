Emscripten WebAssembly Demo for Deno & Node.js
==============================================

# How to build?

```
$ mkdir cmake-build-release
$ (cd cmake-build-release ; ../emmake.sh ../ ; make)
```

# Run wasm with Deno

```
$ deno run demo.ts
```

# Node.js integration
Please create a demo2.js file with following code:

```
let factory = require('./cmake-build-release/@moduleName@_node');

factory().then((instance) => {
    console.log(instance._daysInWeek());
    let result = instance.ccall('welcome', 'string', ['string'], ["leijuan"]);
    console.log(result);
});

```

then run `node demo2.js`

# Clion Integration

CLion with emscripten: Settings > Build, Execution, Deployment > CMake,  add following in CMake options:

```
-DCMAKE_TOOLCHAIN_FILE=~/github/emscripten-core/emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake
```


