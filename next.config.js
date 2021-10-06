const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  basePath: ghPages ? '/SD_Fintech_Website' : '',
  assetPrefix: ghPages ? '/SD_Fintech_Website/' : ''
};