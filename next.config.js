const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  assetPrefix: ghPages ? '/nus-fintech-society.github.io/SD_Fintech_Website/' : ''
};