/**
 * 调色板，在 antd 的用样式文件中也有这种设计，或者说，arco 应该也是参考了 ant 的设计
 * @arco-design/color 是 arco 对颜色处理的一个包，arco & antd 在处理上大同小异
 * 调色板的主要意义在于，取一个基础色很容易，但是要在基础色上寻找色相、饱和度、透明度均衡递增或递减的颜色来丰富色系，是一个吃力的工作，
 * 调色板能够基于一个基础色，根据传入的索引数字对基础色进行色相、饱和度、透明度的均衡递增递减生成颜色，而无需人工寻找对应颜色
 */

const { generate } = require('@arco-design/color');

module.exports = {
  install(_, __, functions) {
    functions.add('color-palette', (color, index) => {
      return generate(color.value, { index: index.value });
    });
  },
};
