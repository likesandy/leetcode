function countDigits(num: number): number {
  let n = 0;
  for (const item of num + "") {
    if (num % +item === 0) n++;
  }
  return n;
}

console.log(countDigits(121));
