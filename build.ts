import dts from 'bun-plugin-dts-auto'

// eslint-disable-next-line no-console
console.log('Building...')

await Bun.build({
  entrypoints: [
    './src/index.ts',
  ],
  outdir: './dist',
  target: 'bun',

  plugins: [
    dts({
      outDir: './dist',
    }),
  ],
})

// eslint-disable-next-line no-console
console.log('Built!')
