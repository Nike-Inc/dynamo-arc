// rollup.config.js
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/main.ts',
  output: [
    {
      // dir: 'lib',
      file: 'lib/main.js',
      format: 'cjs',
    },
    {
      // dir: 'lib',
      file: 'lib/module.js',
      format: 'esm',
    },
  ],
  // external: ['@aws-sdk/client-dynamodb', '@aws-sdk/util-dynamodb'],
  plugins: [typescript()],
}
