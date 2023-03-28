// 时间：Ok（其中 k 是数字 n 的二进制表示中 1 的个数。这是因为算法在每次迭代中都会从 n 中去掉一个二进制位为 1 的数字，所以它最多迭代 k 次）
// 空间：O1
function hammingWeight(n: number): number {
  let c = 0;
  while (n) {
    n &= n - 1;
    c++;
  }
  return c;
}
