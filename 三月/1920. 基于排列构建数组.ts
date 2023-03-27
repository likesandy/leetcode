function buildArray(nums: number[]): number[] {
  return nums.map((value, index) => {
    return nums[nums[index]];
  });
}
