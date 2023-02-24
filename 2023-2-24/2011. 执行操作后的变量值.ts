function finalValueAfterOperations(operations: string[]): number {
  let ans = 0;
  operations.forEach((value) => {
    ans += value.includes("+") ? 1 : -1;
  });
  return ans;
}
