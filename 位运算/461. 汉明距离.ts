// 异或运算+求1的个数(按位与)
// 时间：Ologn
// 空间：O1
// 时间复杂度：
// 整数 x 和 y 的二进制位长度是固定的，所以位运算的次数是常数级别的，即 O(1)。
// while 循环的次数等于 n 的二进制表示中 1 的个数，最坏情况下需要循环整个 n 的位数，即 O(log n)。
// 因此，整个函数的时间复杂度为 O(log n)。
// 空间复杂度：
// 函数使用了常数个变量，所以空间复杂度为 O(1)。
// 因此，该函数的时间复杂度为 O(log n)，空间复杂度为 O(1)。
function hammingDistance(x: number, y: number): number {
  let n = x ^ y;
  let ans = 0;
  while (n) {
    n &= n - 1;
    ans++;
  }
  return ans;
}
