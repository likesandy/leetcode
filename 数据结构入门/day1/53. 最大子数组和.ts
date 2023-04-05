function maxSubArray(nums: number[]): number {
  const n = nums.length;
  // 我们发现状态值只跟前一个值有关系，定义前一个值变量就可以了
  let preValue = nums[0];
  // 我们不需要最后展开数组，然后返回最大值
  let max = preValue;
  for (let i = 1; i < n; i++) {
    preValue = Math.max(nums[i], nums[i] + preValue);
    max = Math.max(preValue, max);
  }
  return max;
}
