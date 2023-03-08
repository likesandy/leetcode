// https://zh.wikipedia.org/wiki/%E9%80%BB%E8%BE%91%E5%BC%82%E6%88%96
function decode(encoded: number[], first: number): number[] {
  const n = encoded.length;
  const arr: number[] = new Array(n + 1);
  arr[0] = first;
  for (let i = 0; i < n; i++) {
    arr[i + 1] = encoded[i] ^ arr[i];
  }
  return arr;
}

// leetcode
function decode2(encoded: number[], first: number): number[] {
  let res: number[] = [];
  let ans = first;
  for (let i = 0; i < encoded.length; i++) {
    ans = ans ^ encoded[i];
    res.push(ans);
  }
  res.unshift(first);
  return res;
}
