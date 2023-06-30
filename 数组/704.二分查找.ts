// []
function search(nums: number[], target: number): number {
  if (!nums.length) return -1

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let middle = (left + right) >> 1

    if (target < nums[middle]) right = middle - 1
    else if (target > nums[middle]) left = middle + 1
    else return middle
  }
  return -1
}

// [)
function search(nums: number[], target: number): number {
  if (!nums.length) return -1

  let left = 0
  let right = nums.length

  while (left < right) {
    let middle = (left + right) >> 1

    if (target < nums[middle]) right = middle
    else if (target > nums[middle]) left = middle + 1
    else return middle
  }
  return -1
}
