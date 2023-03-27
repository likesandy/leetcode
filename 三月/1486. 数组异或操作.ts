function xorOperation(n: number, start: number): number {
  const nums: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    nums[i] = start + 2 * i;
  }
  return nums.reduce((pre, cur) => {
    return pre ^ cur;
  }, 0);
}

xorOperation(10, 5);

// leetcode
function xorOperation2(n: number, start: number): number {
  let nums: number[] = [];
  for (let i = 0; i < n; i++) {
    nums.push(start + i * 2);
  }
  let temp = nums[0];
  for (let i in nums) {
    if (Number(i) == 0) {
      continue;
    }
    temp = nums[i] ^ temp;
  }
  return temp;
}
