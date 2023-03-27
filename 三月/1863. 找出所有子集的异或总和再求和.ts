function subsetXORSum(nums: number[]): number {
  let ans = 0;

  nums.forEach((item) => {
    ans += item;
  });

  console.log(ans);

  if (nums.length !== 2) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        ans += nums[i] ^ nums[j];
      }
    }
  }

  console.log(ans);

  ans += nums.reduce((pre, cur) => pre ^ cur, 0);

  return ans;
}
// 方法不对没有做出来，学习位运算ing
subsetXORSum([3, 4, 5, 6, 7, 8]);
