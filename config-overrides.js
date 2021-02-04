const { override, addLessLoader } = require('customize-cra');

function envOverrides(config, env) {
  if (env !== 'production') {
    config = { ...config, devtool: 'cheap-module-eval-source-map' };
  }

  return config;
}

module.exports = override(envOverrides, addLessLoader({ javascriptEnabled: true }));
