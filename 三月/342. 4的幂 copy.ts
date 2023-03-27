// 时间: O1
// 空间：O1
// 题解
// https://leetcode.cn/problems/power-of-four/solution/4de-mi-by-leetcode-solution-b3ya/
// https://www.bilibili.com/video/BV1YT4y117AH?p=3
function isPowerOfFour(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
}
