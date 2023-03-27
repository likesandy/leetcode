function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  const ans: number[] = [];
  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }
  return ans;
}

// leetcode
function getConcatenation2(nums: number[]): number[] {
  return [...nums, ...nums];
}
