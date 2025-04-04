# Examples

## Table of contents

1. [Aggressive Merging](#aggressive-merging)
2. [Chunk](#chunk)
3. [Code Splitted](#code-splitted)
4. [Code Splitting](#code-splitting)
5. [Coffee Script](#coffee-script)
6. [CommonJS](#commonjs)
7. [DLL](#dll)
8. [Externals](#externals)
9. [Harmony](#harmony)
10. [HTTP2 Aggressive Splitting](#http2-aggressive-splitting)
11. [Hybrid Routing](#hybrid-routing)
12. [Loader](#loader)
13. [Mixed](#mixed)
14. [Multi Compiler](#multi-compiler)
15. [Multi Part Library](#multi-part-library)
16. [Multiple Entry Points](#multiple-entry-points)
17. [Require Context](#require-context)
18. [Require Resolve](#require-resolve)
19. [Scope Hoisting](#scope-hoisting)
20. [Side Effects](#side-effects)
21. [Source Map](#source-map)
22. [WebAssembly](#webassembly)
23. [Web Worker](#web-worker)
24. [Requests](#requests)
25. [Building an Example](#building-an-example)


## Aggressive merging
[aggressive-merging](aggressive-merging)

## Chunk
[chunkhash](chunkhash)

[common-chunk-and-vendor-chunk](common-chunk-and-vendor-chunk)

[explicit-vendor-chunk](explicit-vendor-chunk)

[extra-async-chunk-advanced](extra-async-chunk-advanced)

[extra-async-chunk](extra-async-chunk)

[code-splitting-specify-chunk-name](code-splitting-specify-chunk-name)

[named-chunks](named-chunks) example demonstrating merging of chunks with named chunks

[two-explicit-vendor-chunks](two-explicit-vendor-chunks)

## Code splitted
[code-splitted-css-bundle](code-splitted-css-bundle)

[code-splitted-require.context-amd](code-splitted-require.context-amd) example demonstrating contexts in a code-split environment with AMD.

[code-splitted-require.context](code-splitted-require.context) example demonstrating contexts in a code-split environment.

## Code splitting
[code-splitting](code-splitting) example demonstrating a very simple case of Code Splitting.

[code-splitting-bundle-loader](code-splitting-bundle-loader) example demonstrating Code Splitting through the builder loader

[code-splitting-harmony](code-splitting-harmony)

[code-splitting-native-import-context](code-splitting-native-import-context)

[code-splitting-specify-chunk-name](code-splitting-specify-chunk-name)

## Coffee script
[coffee-script](coffee-script) example demonstrating code written in coffee-script.

## CommonJS
[commonjs](commonjs) example demonstrating a very simple program

## DLL
[dll](dll)

[dll-user](dll-user)

## Externals
[externals](externals)

## Harmony
[harmony](harmony)

[code-splitting-harmony](code-splitting-harmony)

[harmony-interop](harmony-interop)

[harmony-library](harmony-library)

[harmony-unused](harmony-unused)

## HTTP2 Aggressive splitting
[http2-aggressive-splitting](http2-aggressive-splitting)

## Hybrid routing
[hybrid-routing](hybrid-routing)

## Loader
[loader](loader) example demonstrating the usage of loaders.

## Mixed
[mixed](mixed) example demonstrating mixing CommonJs and AMD

## Multi compiler
[multi-compiler](multi-compiler)

## Multi part library
[multi-part-library](multi-part-library)

## Multiple entry points
[multiple-entry-points](multiple-entry-points) example demonstrating multiple entry points with Code Splitting.

## Require context
[require.context](require.context) example demonstrating automatic creation of contexts when using variables in `require`.

## Require resolve
[require.resolve](require.resolve) example demonstrating how to cache clearing of modules with `require.resolve` and `require.cache`.

## Scope hoisting
[scope-hoisting](scope-hoisting)

## Side effects
[side-effects](side-effects)

## TypeScript
[TypeScript](typescript)

## Source map
[source-map](source-map)

## WebAssembly
[wasm-simple](wasm-simple) example demonstrating simple import from a WebAssembly module
[wasm-complex](wasm-complex) example demonstrating top-level await and import of WebAssembly text format with wast-loader

## Web worker
[web-worker](worker) example demonstrating creating WebWorkers with webpack.


# Requests
If you think an example is missing, please report it as issue. :)

# Building an example
1. Run `pnpm i` in the root of the project.
2. Run `pnpm setup` in the root of the project.
3. Run `pnpm add --dev webpack-cli` in the root of the project.
4. Run `node build.js` in the specific example directory. (Ex: `cd examples/commonjs && node build.js`)

Note: To build all examples run `npm run build:examples`
