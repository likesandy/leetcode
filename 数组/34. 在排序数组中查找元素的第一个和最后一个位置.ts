function searchRange(nums: number[], target: number): number[] {
  const index = binarySearch(nums, target)

  if (index === -1) return [-1, -1]

  let left = index
  let right = index

  while (left - 1 >= 0 && nums[left - 1] === target) {
    left--
  }

  while (right + 1 < nums.length && nums[right + 1] === target) {
    right++
  }

  return [left, right]
}

function binarySearch(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (target > nums[mid]) left = mid + 1
    else if (target < nums[mid]) right = mid - 1
    else return mid
  }
  return -1
}

