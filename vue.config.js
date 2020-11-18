module.exports = {
  chainWebpack: config => {
    config.externals(["vue", "vue-router", /^@gz\/.+/]);
  },
  lintOnSave: false,
  filenameHashing: false
};
