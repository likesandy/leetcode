// 暴力法
// 时间复杂度: On²
// 空间复杂度: O1
function numIdenticalPairs(nums: number[]): number {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) ans++;
    }
  }
  return ans;
}

// 哈希表
// 时间复杂度: On
// 空间复杂度: On
function numIdenticalPairs(nums: number[]): number {
  let count = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      count += map.get(nums[i]);
      map.set(nums[i], map.get(nums[i]) + 1);
    } else map.set(nums[i], 1);
  }
  return count;
}
