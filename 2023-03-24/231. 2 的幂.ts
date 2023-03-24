// 位运算
// 时间：O1
// 空间：O1
// 题解
// https://leetcode.cn/problems/power-of-two/solution/power-of-two-er-jin-zhi-ji-jian-by-jyd/
function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}
