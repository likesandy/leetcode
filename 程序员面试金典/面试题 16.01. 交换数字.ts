// ES6数组交换方法（无法通过，效率太慢）
function swapNumbers(numbers: number[]): number[] {
  numbers[(numbers[0], numbers[1])] = numbers[(numbers[1], numbers[0])];
  return numbers;
}

// 异或运算符性质
// a ^ a = 0
// a ^ 0 = a
// 时间：O1
// 空间：O1
function swapNumbers(numbers: number[]): number[] {
  numbers[0] ^= numbers[1];
  numbers[1] ^= numbers[0];
  numbers[0] ^= numbers[1];
  return numbers;
}
