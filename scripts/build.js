const { build } = require('esbuild');

const globby = require('globby');

(async () => {
  const entryPoints = await globby(['src/**/**', '!src/**/__tests__/**']);

  build({
    entryPoints,
    outdir: './build',
  }).catch(() => process.exit(1));
})();