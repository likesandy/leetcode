// https://leetcode-cn.com/problems/maximum-subarray/
// 动态规划
function maxSubArray(nums: number[]): number {
  // 1.获取数组的长度
  const n = nums.length;
  if (n === 1) return n;

  // 2.定义状态
  let dp: number[] = new Array(n);

  // 3.初始化状态
  dp[0] = nums[0];

  // 4.状态转移的过程
  /**
   * 以i位置结尾的最大子序列的计算方式:
   * - 如果前面的子序列是负数，那么最大子序列和一定是自己
   * - 如果前面的子序列是正数，那么最大子序列和是自己+前值
   */
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }
  return Math.max(...dp);
}

// 优化: 状态压缩
function maxSubArray2(nums: number[]): number {
  const n = nums.length;
  if (n === 1) return n;
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

// leetcode耗时最短的代码
function maxSubArray3(nums: number[]): number {
  let sum = 0; //记录和
  let max = nums[0]; //用于最大子数组和，从一个开始
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    //遍历数组每个元素
    sum += nums[i]; //加上每一个数值
    if (sum > max) {
      max = sum; //记录最大值
    }
    if (sum < 0) {
      sum = 0; //从下一个阶段
    }
  }

  return max; //保存最大
}

export {};
