// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'lib/main.js',
      format: 'cjs',
    },
    {
      file: 'lib/module.js',
      format: 'esm',
    },
  ],
  // external: ['@aws-sdk/client-dynamodb', '@aws-sdk/util-dynamodb'],
  plugins: [
    typescript({
      lib: ['es2020'],
      target: 'es2019',
      module: 'esnext',
      emitDeclarationOnly: false,
      // tsconfig: false,
      // resolveJsonModule: true,
      // moduleResolution: 'node',
      // esModuleInterop: true,
      // inlineSourceMap: false,
      // skipLibCheck: true,
      // include: ['src/**/*', 'node_modules/**/*'],
      // exclude: ['**/__tests__/*'],
    }),
    nodeResolve({
      mainFields: ['main', 'module'],
    }),
    commonjs(),
    json(),
  ],
}
