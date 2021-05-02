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
  }
};
