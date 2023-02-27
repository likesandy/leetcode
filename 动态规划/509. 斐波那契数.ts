// https://leetcode.cn/problems/fibonacci-number/
// 递归方法
function fib(n: number): number {
  // 如果n小于等于1，则直接返回n，因为斐波那契数列中的前两个数字为0和1
  if (n <= 1) return n;

  // 递归计算前两个斐波那契数，并将它们相加
  return fib(n - 1) + fib(n - 2);
}

// 记忆化
function fib2(n: number, memo: number[] = []): number {
  // memo用于记录已经计算过的结果
  if (n <= 1) return n;
  // 如果 memo[n] 已经被赋值，则说明之前已经计算过 fib(n) 的值，直接返回 memo[n] 的值
  if (memo[n]) return memo[n];

  // 递归计算 fib(n - 1) 和 fib(n - 2) 的值，并将结果保存到 memo 数组中
  const res = fib2(n - 1, memo) + fib2(n - 2, memo);
  memo[n] = res;
  // 返回最后的结果
  return res;
}

// 动态规划
function fib3(n: number): number {
  if (n <= 1) return n;
  // 1.定义状态
  // 3.初始化状态
  let dp: number[] = [0, 1];

  // 4.计算原问题的解
  for (let i = 2; i <= n; i++) {
    // 2.确定状态转移方程（一般情况下状态转移方程是写在循环里的）
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// 动态规划（状态压缩）
function fib4(n: number): number {
  if (n <= 1) return n;
  let prev = 0; // 初始化第一项为0
  let curr = 1; // 初始化第二项为1
  for (let i = 2; i <= n; i++) {
    const next = prev + curr; // 计算下一项
    prev = curr; // 更新前一项为当前项
    curr = next; // 更新当前项为下一项
  }
  return curr; // 返回第n项的值
}

export {};
