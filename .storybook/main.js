const path = require('path');

module.exports = {
	stories: ['../src/components/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-knobs/register'],
	webpackFinal: async (config, { configType }) => {    
    config.module.rules.push({
      test: /\.pcss$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader'
      ],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
}
