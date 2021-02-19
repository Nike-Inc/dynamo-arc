require('esbuild')
  .build({
    entryPoints: ['src/main.ts'],
    bundle: true,
    outfile: 'lib/main.js',
    platform: 'node',
    format: 'cjs',
    target: 'es2019',
  })
  .catch(() => process.exit(1))
