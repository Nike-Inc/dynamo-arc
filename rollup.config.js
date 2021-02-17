// rollup.config.js
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/main.ts',
  output: {
    dir: 'lib',
    format: 'cjs',
  },
  external: ['@aws-sdk/client-dynamodb', '@aws-sdk/util-dynamodb'],
  plugins: [typescript()],
}
