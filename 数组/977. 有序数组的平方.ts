function sortedSquares(nums: number[]): number[] {
  const res: number[] = []
  if (!nums.length) return res

  // 左指针
  let left = 0
  // 右指针
  let right = nums.length - 1

  // 当左指针小于等于右指针时循环
  while (left <= right) {
    // 如果左指针指向数字的绝对值大于右指针指向数字
    // 因为这个数组是有序的
    // 所以右指针指向的数字不需要取绝对值

    // 将左指针指向数字的平方加入结果数组的开头，然后left++
    if (Math.abs(nums[left]) > nums[right]) res.unshift(nums[left++] ** 2)
    // 否则将右指针指向数字的平方加入结果数组的开头，然后right--
    // 等于情况取left或者right都一样，所以不需要单独处理
    else res.unshift(nums[right--] ** 2)
  }

  return res
}

