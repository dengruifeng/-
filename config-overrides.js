// 重写webpack配置的文件
// const { override, fixBabelImports } = require('customize-cra');
const { override, fixBabelImports, addLessLoader } = require('customize-cra');


module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css',
    style: true,
  }),
   addLessLoader({
       javascriptEnabled: true,
       //改antd全局颜色
      //modifyVars: { '@primary-color': 'pink' ,},
     }),
);
