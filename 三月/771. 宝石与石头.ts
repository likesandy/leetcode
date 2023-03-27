// leetcode 题解
function numJewelsInStones(jewels: string, stones: string): number {
  const jewelsSet = new Set(jewels);
  return stones.split("").reduce((pre, cur) => pre + +jewelsSet.has(cur), 0);
}

// leetcode 用时时间最短
function numJewelsInStones2(jewels: string, stones: string): number {
  const length = stones.length;
  for (let char of jewels) {
    stones = stones.split(char).join("");
  }
  return length - stones.length;
}

numJewelsInStones2("aA", "aAAbbbb");
