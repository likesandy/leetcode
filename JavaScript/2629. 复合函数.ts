type F = (x: number) => number

/**
 * 组合函数
 * @param functions 函数数组，每个函数接收一个 number 类型参数并返回一个 number 类型结果
 * @returns 组合后的函数，接收一个 number 类型参数并返回一个 number 类型结果
 */
const compose: (functions: F[]) => F = (functions: F[]) => (x) =>
  functions.reduceRight((acc, cur) => cur(acc), x)

