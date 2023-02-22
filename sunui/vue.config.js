const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages:{
    index:{
      entry:'examples\\main.js',//进入的位置
      template:"public/index.html",//模板类型
      filename: "index.html"//改名字
    }
}
})
