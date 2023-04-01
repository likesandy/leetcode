// 位运算
// 时间：O(j-i+1)
// 空间：O1
// 中 j-i+1 是需要清除的比特位数量，因为循环需要遍历这些比特位。因为 j-i+1 是一个常数，所以时间复杂度为 O(1)
function insertBits(N: number, M: number, i: number, j: number): number {
  // N的i~j变0
  for (let k = i; k <= j; k++) {
    N &= ~(1 << k);
  }

  // 插入
  return N | (M << i);
}

insertBits(1024, 19, 2, 6);
