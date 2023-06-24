function removeElement(nums: number[], val: number): number {
  if (!nums.length) return 0

  let slowIndex = 0
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== val) {
      nums[slowIndex] = nums[fastIndex]
      slowIndex++
    }
  }
  return slowIndex
}

