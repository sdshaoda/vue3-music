const registerRouter = require('./backend/router')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/assets/scss/variable';
          @import '@/assets/scss/mixin';
        `
      }
    }
  },
  devServer: {
    before(app) {
      registerRouter(app)
    }
  }
};
