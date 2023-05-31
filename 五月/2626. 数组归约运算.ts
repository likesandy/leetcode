type Fn = (accum: number, curr: number) => number

// 手写reduce
function reduce(nums: number[], fn: Fn, init: number): number {
  let accumulator = init
  for (let i = 0; i < nums.length; i++) {
    accumulator = fn(accumulator, nums[i])
  }
  return accumulator
}

// 动态规划
function reduce(nums: number[], fn: Fn, init: number): number {
  let n = nums.length
  if (!n) return init
  let dp = Array(n)
  dp[0] = fn(init, nums[0])
  for (let i = 1; i < n; i++) {
    dp[i] = fn(dp[i - 1], nums[i])
  }
  return dp[n - 1]
}

