import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
    files: 'out/src/test/**/*.test.js',
    mocha: {
        timeout: 20000,
        ui: 'tdd'
    }
});
