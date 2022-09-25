/**
 * 防抖
 * @param {*} callback
 * @param {*} delay
 * @param {*} immediate
 * @returns
 */

export function debounce(callback: Function, delay = 1000, immediate = true) {
  // 定义一个计时器
  let timer: any = null;
  // debounce 返回值是一个函数，实际上执行的也是这个函数
  // ...rest 参数扩展
  return (...rest: any) => {
    // 如果定时器存在就清除它，即永远只调用最后一次
    if (timer) {
      clearTimeout(timer);
    }
    // 如果是立即执行，delay 参数设为 0
    if (immediate) {
      timer = setTimeout(() => {
        callback(...rest);
      }, 0);
    } else {
      // 如果不是立即执行
      timer = setTimeout(() => {
        callback(...rest);
      }, delay);
    }
  };
}

/**
 * 节流
 * @param {*} callback
 * @param {*} delay
 */
export function throttle(callback: Function, gap: number) {
  // 定义一个起始时间
  let begin = 0;
  return (...rest: any) => {
    // 定义一个当前时间
    let currentTime = new Date().getTime();
    // 当前时间减去上一次触发函数的时间间隔大于设定的时间间隔才执行函数
    if (currentTime - begin > gap) {
      callback(...rest);
      // 将当前时间赋值为起始时间
      begin = currentTime;
    }
  };
}

/**
 * 递归深拷贝
 * @param {*} source
 * @returns
 */
export function deepClone(source: object | []) {
  // 定义一个 targetObj 存放结果，与拷贝目标同类型
  const targetObj = source.constructor === Array ? [] : {};
  // 目标不存在直接返回空的 targetObj
  if (!source) return targetObj;
  // 如果目标存在且属于对象、数组、函数
  if (source && typeof source === 'object') {
    // 遍历目标
    for (let key in source) {
      // 只拷贝目标自身属性不拷贝原型链上的属性
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] === 'object') {
          // targetObj 设置属性， 如果该属性为引用类型数据则递归赋值
          targetObj[key] = deepClone(source[key]);
        } else {
          // 如果是普通类型则直接赋值
          targetObj[key] = source[key];
        }
      }
    }
  }
  return targetObj;
}

/**
 * 树数据扁平化
 * @param {*} tree
 */
export function treeToFlat(tree: any[]): any {
  return tree.reduce((res, item) => {
    const { children, ...i } = item;
    return res.concat(i, children && children.length ? treeToFlat(children) : []);
  }, []);
}

/**
 * 对数据按照 func 返回的内容进行分组
 * @param arr
 * @param func
 * @returns {*[]}
 */
export function groupBy(arr: [], func: Function, resultObj: object) {
  const cache = {};
  arr.forEach((item) => {
    const groupName = func(item);
    const array = cache[groupName] || [];
    array.push(item);
    cache[groupName] = array;
  });
  if (resultObj) return cache;
  return Object.keys(cache).map((item) => cache[item]);
}
