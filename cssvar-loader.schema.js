const path = require('path');
const commonPaths = require('@shopify/slate-config/common/paths.schema');

module.exports = {
  ...commonPaths,

  // Enable/disable cssvar loader plugin
  'cssVarLoader.enable': true,

  // An array of string paths to liquid files that associate css variables to liquid variables
  'cssVarLoader.liquidPath': (config) => [
    path.resolve(config.get('paths.theme'), 'src/layout/theme.liquid'),
  ],
  'cssVarLoader.settingsPath': (config) => path.resolve(config.get('paths.theme'), 'src/config/settings_data.json'),
};