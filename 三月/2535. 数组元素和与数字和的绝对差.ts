function differenceOfSum(nums: number[]): number {
  let elementTotal: number = 0;
  let numberTotal: number = 0;
  for (let num of nums) {
    elementTotal += num;
    let number = num.toString().split("");
    number.forEach((item) => {
      numberTotal += +item;
    });
  }

  return Math.abs(elementTotal - numberTotal);
}

// leetcode
function differenceOfSum2(nums: number[]): number {
  const elementSum = nums.reduce((sum, item) => sum + item, 0);
  const digitSum = nums.reduce((sum, item) => {
    while (item) {
      const digit = item % 10;
      sum += digit;
      item = (item - digit) / 10;
    }

    return sum;
  }, 0);

  return Math.abs(elementSum - digitSum);
}
