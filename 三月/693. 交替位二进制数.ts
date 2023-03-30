// 时间：Ok
// 空间：O1
// 该函数的时间复杂度取决于输入的整数n的位数。在最坏情况下，n是一个具有k位的数字，因此while循环的迭代次数将是k。由于每次循环迭代都只涉及一次位运算和一次位移位运算，因此while循环的时间复杂度为O(k)。因此，该函数的时间复杂度为O(k)
// 该函数没有使用任何额外的数据结构来存储数据，只是使用了一个整数变量n来保存输入。因此，该函数的空间复杂度是常数级的O(1)。
function hasAlternatingBits(n: number): boolean {
  while (n) {
    if ((n & 3) === 0 || (n & 3) === 3) return false;
    n >>= 1;
  }
  return true;
}
