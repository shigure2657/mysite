const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/mysite/' : '',
  basePath: isProd ? '/mysite' : '',
  trailingSlash: true,
};