const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: "export",
  assetPrefix: isProd ? '/mysite.github.io/' : '',
  basePath: isProd ? '/mysite.github.io' : '',
  trailingSlash: true,
};