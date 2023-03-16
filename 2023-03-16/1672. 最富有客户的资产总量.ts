function maximumWealth(accounts: number[][]): number {
  return Math.max(
    ...accounts.map((value) => value.reduce((pre, cur) => pre + cur, 0))
  );
}

// leetcode 效率更高，不过我喜欢我写的哈哈，代码短就喜欢
function maximumWealth2(accounts: number[][]): number {
  let ans = 0;
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    let sum = 0;
    for (let j = 0; j < account.length; j++) {
      sum += account[j];
    }
    ans = Math.max(ans, sum);
  }
  return ans;
}
