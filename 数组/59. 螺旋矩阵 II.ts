function generateMatrix(n: number): number[][] {
  if (n <= 1) return [[1]]

  // 二维数组中的每个子数组都需要在使用之前进行初始化
  let res: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let i = 0
  let j = 0
  // 偏移量
  let offset = 1
  // 起始坐标
  let startX = 0
  let startY = 0
  // 循环次数
  let loop = Math.floor(n / 2)
  // 从1开始
  let count = 1
  // 矩阵中间的位置，例如：n为3， 中间的位置就是(1，1)，n为5，中间位置为(2, 2)
  const mid = Math.floor(n / 2)

  while (loop--) {
    i = startX
    j = startY

    // 1~2
    for (; j < n - offset; j++) {
      res[i][j] = count++
    }

    // 3~4
    for (; i < n - offset; i++) {
      res[i][j] = count++
    }

    // 5~6
    for (; j > startY; j--) {
      res[i][j] = count++
    }

    // 7~8
    for (; i > startX; i--) {
      res[i][j] = count++
    }

    startX++
    startY++
    offset++

    if (n % 2 === 1) {
      res[mid][mid] = count
    }
  }

  return res
}

