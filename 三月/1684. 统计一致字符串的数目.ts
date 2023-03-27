// leetcode
function countConsistentStrings(allowed: string, words: string[]): number {
  const set = new Set(allowed);
  let ans = 0;
  out: for (const word of words) {
    for (const w of word) {
      if (!set.has(w)) continue out;
    }
    ans++;
  }
  return ans;
}

// leetcode reduce
function countConsistentStrings2(allowed: string, words: string[]): number {
  const dict = new Set(allowed);
  return words.reduce((a, s) => a + +[].every.call(s, (c) => dict.has(c)), 0);
}
