module.exports = {
  chainWebpack: (config) => {
    config.externals([/^@gz\/.+/]);
  },
  lintOnSave: false,
  filenameHashing: false,
};
