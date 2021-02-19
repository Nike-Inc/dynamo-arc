// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/main.ts',
  output: {
    dir: 'lib',
    format: 'cjs',
  },
  // external: ['@aws-sdk/client-dynamodb', '@aws-sdk/util-dynamodb'],
  plugins: [
    typescript(),
    nodeResolve({ jsnext: 'main' }),
    commonjs(),
    json(),
    // terser({
    //   compress: {
    //     ecma: '2019',
    //   },
    // }),
  ],
}
