function reverseStr(s: string, k: number): string {
  const arr = s.split('')
  const n = arr.length

  for (let i = 0; i < n; i += 2 * k) {
    // Math.min 确保不超过字符数组的边界
    // i+k-1 剩余字符不足 k 个时，只反转剩余字符的部分
    myReverse(arr, i, Math.min(i + k, n) - 1)
  }

  return arr.join('')
};

function myReverse(arr: string[], left: number, right: number) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }
}
