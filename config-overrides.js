const WebpackObfuscator = require('webpack-obfuscator');
module.exports = {
  webpack: function (config, env) {
    config.plugins.push(
      new WebpackObfuscator({
        stringArrayRotate: true,
        stringArrayShuffle: true,
        stringArrayThreshold: 1,
        simplify: true,
        compact: false,
        splitStrings: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
      })
    );
    return config;
  },
};
