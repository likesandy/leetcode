function repeatedCharacter(s: string): string {
  let res = "";
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s.indexOf(s[i]) !== i) {
      res = s[i];
      break;
    }
  }
  return res;
}

// leetcode
function repeatedCharacter2(s: string): string {
  const seen = new Set();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (seen.has(ch)) {
      return ch;
    }
    seen.add(ch);
  }
  return " ";
}
