function findMaxK(nums: number[]): number {
  let set = new Set(nums)
  let max = -1
  for (let num of nums) {
    if (num > 0 && set.has(-num)) {
      max = Math.max(max, num)
    }
  }
  return max
}

