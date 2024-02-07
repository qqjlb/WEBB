// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  plugins: ['@/plugins/rem'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      // 这个工具可以实现自动添加CSS3前缀
      autoprefixer: {
        overrideBrowserslist: ['last 5 version', '>1%', 'ie >=8'],
      },
      'postcss-pxtorem': {
        rootValue: 192, // 指定转换倍率，我现在设置这个表示1rem=37.5px;
        // 如果设计稿的尺寸不是 375，而是 750 或其他大小
        //rootValue({ file }) {
        //	return file.indexOf('vant') !== -1 ? 37.5 : 75;
        //},
        // propList: ['*'], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
        mediaQuery: false, // 是否允许使用媒体查询，false媒体查询的代码可用，true不可用
        exclude: 'ignore',
        replace: true, // 替换包含rem的规则，而不是添加回退
        minPixelValue: 1, // 需要转换的最小值，一般1px像素不转换，以上才转换
        unitPrecision: 6, // 转换成rem单位的小数点后的保留位数
        selectorBalckList: ['van', 'el','a'], // 匹配不被转换为rem的选择器
      },
    },
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
          'naive-ui',
          'vueuc',
          '@css-render/vue3-ssr',
          '@juggle/resize-observer'
        ]
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone']
          : []
    }
  }
})
