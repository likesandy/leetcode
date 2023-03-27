function reverseLeftWords(s: string, n: number): string {
  const str = [...s];
  for (let i = 0; i < n; i++) {
    str.push(str.shift()!);
  }
  return str.join("");
}
export {};

// leetcode
function reverseLeftWords2(s: string, n: number): string {
  const frontStr = s.slice(0, n);
  const backStr = s.slice(n);
  return backStr + frontStr;
}
