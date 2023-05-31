/**
 * curry - 柯里化函数
 * @param {Function} func - 需要柯里化的函数
 * @returns {Function} - 柯里化后的函数
 */
function curry(func: Function): Function {
  // 返回一个新函数
  return function curried(...args: any[]) {
    // 如果参数数量大于等于原函数的参数数量
    if (args.length >= func.length) {
      // 调用原函数并返回结果
      return func.apply(this, args)
    } else {
      // 否则返回一个新函数
      return function (...args2: any[]) {
        // 将新函数的参数与之前的参数合并
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

