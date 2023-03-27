// 有点动态规划的意思
function leftRigthDifference(nums: number[]): number[] {
  const n = nums.length;
  const leftSum: number[] = new Array(n).fill(0);
  const rightSum: number[] = new Array(n).fill(0);
  const answer: number[] = [];
  for (let i = 1; i < n; i++) {
    leftSum[i] = leftSum[i - 1] + nums[i - 1];
  }

  for (let i = n - 1; i >= 1; i--) {
    rightSum[i - 1] = rightSum[i] + nums[i];
  }

  for (let i = 0; i < n; i++) {
    answer[i] = Math.abs(leftSum[i] - rightSum[i]);
  }

  return answer;
}
