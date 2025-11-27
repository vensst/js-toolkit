import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {babel} from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import {dts} from 'rollup-plugin-dts';

const plugins = [
  commonjs(),
  resolve({
    browser: true
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**'
  }),
  terser({
    compress: {
      ecma: 2015,
      // drop_console: true,
      // drop_debugger: true,
      // pure_getters: true,
      // unsafe: true,
      // unsafe_comps: true
    },
    mangle: {
      properties: {
        regex: '^_'
      }
    },
    output: {
      comments: false
    }
  }),
  nodePolyfills()
]


export default [
  {
    input: `src/index.js`,
    plugins,
    external: [
      // 可选：添加不打包的依赖，如第三方依赖
      // 'cookies',
    ],
    treeshake: { // 是否应用除屑优化（tree-shaking）
      preset: "recommended",
      propertyReadSideEffects: false
    },
    output: [
      {
        file: `lib/index.esm.js`,
        format: 'es',
        // sourcemap: true,
        inlineDynamicImports: true,
      },
      // {
      //   file: `lib/index.cjs.js`,
      //   format: 'cjs',
      //   // sourcemap: true,
      //   inlineDynamicImports: true,
      //   exports: 'named',
      // },
      {
        file: `lib/index.umd.js`,
        format: 'umd',
        name: 'JsToolkit',
        // sourcemap: true,
        inlineDynamicImports: true,
        // 对于工具文件，使用'default'导出以避免window.toPDF.toPDF这种情况
        exports: 'named',
        // globals: { // umd 和 iife 提供全局变量名，以替换掉外部引入
        //   'crypto-js': 'CryptoJS',
        // }
      }
    ],
  },
  // 类型定义文件
  {
    input: `./types/index.d.ts`,
    output: [{
      file: `lib/index.d.ts`,
      format: 'es'
    }],
    plugins: [
      dts({
        // 添加这个配置以打包指定的类型依赖
        compilerOptions: {
          baseUrl: "./",
          paths: {
            // "xlsx-js-style": ["node_modules/xlsx-js-style"],
          },
          preserveSymlinks: false, // 防止符号链接导致的重复
          strict: true
        },
        // 不将这些依赖视为外部依赖
        respectExternal: true,
      })
    ],
  }
];
