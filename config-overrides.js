const { override, addLessLoader } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

function envOverrides(config, env) {
  if (env !== 'production') {
    config = { ...config, devtool: 'cheap-module-eval-source-map' };
    config = rewireReactHotLoader(config);
  }

  return config;
}

module.exports = override(envOverrides, addLessLoader({ javascriptEnabled: true }));
