// esbuild.config.js
const esbuild = require('esbuild');

const isWatchMode = process.argv.includes('--watch');

// Build options
const buildOptions = {
  entryPoints: ['app/javascript/application.js'],
  bundle: true,
  outfile: 'app/assets/builds/application.js',
  loader: { '.js': 'jsx' }, // Add this to handle JSX syntax
};

if (isWatchMode) {
  esbuild.context(buildOptions).then(context => {
    context.watch();
    console.log('Watching for changes...');
  }).catch(() => process.exit(1));
} else {
  esbuild.build(buildOptions).catch(() => process.exit(1));
}
