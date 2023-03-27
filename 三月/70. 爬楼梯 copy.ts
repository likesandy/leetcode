// https://leetcode.cn/problems/climbing-stairs/
// 动态规划
function climbStairs(n: number): number {
  if (n <= 2) return n;
  // 1.定义状态
  const dp: number[] = new Array(n);

  // 2.初始化状态
  dp[0] = 1;
  dp[1] = 2;

  // 3.状态转移的过程
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// 状态压缩
function climbStairs2(n: number): number {
  if (n <= 2) return n;
  // 只用到了前一个和前两个状态，所以可以用两个变量来保存
  // 0的话不好处理，所以从1开始
  // 第一层的前一个
  let prev = 1;
  // 第一层
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

export {};
