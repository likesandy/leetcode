declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]> // 为数组添加 groupBy 方法，用于按照指定规则分组
  }
}

Array.prototype.groupBy = function <T>(fn: (item: T) => string): Record<string, T[]> {
  const result: Record<string, T[]> = {} // 初始化结果对象
  for (let i = 0; i < this.length; i++) {
    // 遍历数组
    const key = fn(this[i]) // 获取当前元素的分组 key
    result[key] ||= [] // 如果 key 不存在，则初始化为空数组
    result[key].push(this[i]) // 将当前元素添加到对应的数组中
  }
  return result // 返回分组后的结果对象
}

