const OPT = Object.prototype.toString;

export const isObject = (target: any) => {
  return OPT.call(target) === '[object Object]';
};

export const isPlainObject = (target: any) => {
  return JSON.stringify(target) === '{}';
};

export const isArray = (target: any) => {
  return OPT.call(target) === '[object Array]';
};

export const isNumber = (target: any) => {
  return OPT.call(target) === '[object Number]';
};

export const isString = (target: any) => {
  return OPT.call(target) === '[object String]';
};

export const isAllUndefined = (...target: any) => {
  return [...target].every((item) => item === undefined);
};
