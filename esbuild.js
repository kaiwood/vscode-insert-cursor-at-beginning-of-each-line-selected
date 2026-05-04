const esbuild = require('esbuild');

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

const options = {
    bundle: true,
    entryPoints: ['src/extension.ts'],
    external: ['vscode'],
    format: 'cjs',
    logLevel: 'info',
    minify: production,
    outfile: 'dist/extension.js',
    platform: 'node',
    sourcemap: !production,
    target: 'node22'
};

async function main() {
    if (watch) {
        const context = await esbuild.context(options);
        await context.watch();
        return;
    }

    await esbuild.build(options);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
