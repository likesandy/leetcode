function maxProfit(prices: number[]): number {
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
