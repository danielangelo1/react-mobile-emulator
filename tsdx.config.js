// filepath: /Users/danielangelo/Desktop/projetos/react-mobile-emulator/react-mobile-emulator/tsdx.config.js
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('@tailwindcss/postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          tailwindcss(),
          autoprefixer(),
        ],
        inject: true, // Injetar CSS no bundle JS
        extract: !!options.writeMeta, // Extrair para arquivo CSS separado em produção
        modules: false, // Desabilitar CSS modules
        autoModules: false,
        minimize: true,
      })
    );
    return config;
  },
};