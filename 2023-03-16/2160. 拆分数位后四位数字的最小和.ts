// leetcode
function minimumSum(num: number): number {
  const arr = `${num}`.split("").filter(Number).sort();
  let a = "";
  let b = "";
  const n = arr.length;
  for (let i = 0; i < n; i += 2) {
    a += arr[i];
    if (arr[i + 1]) b += arr[i + 1];
  }
  return +a + +b;
}
