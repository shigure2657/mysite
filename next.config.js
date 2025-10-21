const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: "export",
  assetPrefix: isProd ? '/mysite/' : '',
  basePath: isProd ? '/mysite' : '',
  trailingSlash: true,
};