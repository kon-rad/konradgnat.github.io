module.exports = function (api) {
  api.cache();

  return {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-transform-runtime'],
  }
};