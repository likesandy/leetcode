function minSubArrayLen(target: number, nums: number[]): number {
  if (!nums.length) return 0

  let sum = 0
  let left = 0
  let minLenght = nums.length + 1

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]
    while (sum >= target) {
      minLenght = Math.min(right - left + 1, minLenght)
      sum -= nums[left++]
    }
  }

  return minLenght === nums.length + 1 ? 0 : minLenght
}

