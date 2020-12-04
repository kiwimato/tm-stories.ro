const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const routerPaths = require('./src/router/routes').map(r => r.path).filter(p => !p.match(/\*/));
 
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/main.scss";
        `
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    // A, remove the plugin
    config.plugins.delete('prefetch')
    
    // or:
    // B. Alter settings:
    // config.plugin('prefetch').tap(options => {
    //   if (!options[0].fileBlacklist) options[0].fileBlacklist = []
    //   options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
    //   return options
    // })
  },
  configureWebpack: () => {
    new PreloadWebpackPlugin({
      rel: 'preload',
      fileBlacklist: [/myasyncRoute(.)+?\.js$/],
      as(entry) {
        if (/\.woff2$/.test(entry)) return 'font';
        return 'style';
      }
    }),
    new SitemapPlugin({
      base: 'https://tmstories.ro/',
      paths: routerPaths,
      options: {
        fileName: 'sitemap.xml',
        lastMod: true,
        changeFreq: 'monthly'
      }
    })
  }
};