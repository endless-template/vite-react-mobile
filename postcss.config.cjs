module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['Android 4.1', 'iOS >= 10']
    },
    'postcss-pxtorem': {
      rootValue: 16, // 根据设计图尺寸写
      propList: ['*'], // 需要被转换的属性
      selectorBlackList: ['adm-toast-loading'],
      minPixelValue: 2 // 小于2px不转换
    }
  }
}
