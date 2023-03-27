// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
// 动态规划
function maxProfit(prices: number[]): number {
  const p = prices.length;
  // 1.定义状态
  let dp: number[] = new Array(p);
  // 2.初始化状态
  dp[0] = 0;
  // 最低买入的钱
  let minPrice = prices[0];

  // 3.状态转移的过程
  for (let i = 1; i < p; i++) {
    // 昨天的最大收益和今天的最大收益相比
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
    minPrice = Math.min(prices[i], minPrice);
  }
  return dp[length - 1];
}

// 状态压缩
function maxProfit2(prices: number[]): number {
  const p = prices.length;
  // 只用到了前一个状态值,所以可以用两个变量来保存
  let minPrice = prices[0];
  let maxPrice = 0;
  for (let i = 1; i < p; i++) {
    // 昨天的最大收益和今天的最大收益相比
    maxPrice = Math.max(maxPrice, prices[i] - minPrice);
    minPrice = Math.min(prices[i], minPrice);
  }
  return maxPrice;
}

export {};
