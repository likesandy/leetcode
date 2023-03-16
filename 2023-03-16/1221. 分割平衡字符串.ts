// leetcode 题解 贪心算法
function balancedStringSplit(s: string): number {
  const n = s.length;
  let a = 0;
  let b = 0;
  for (let i = 0; i < n; i++) {
    a += s[i] === "R" ? +1 : -1;
    if (a === 0) b++;
  }
  return b;
}
