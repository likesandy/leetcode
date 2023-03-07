function prefixCount(words: string[], pref: string): number {
  let i = 0;
  for (const word of words) {
    if (word.startsWith(pref)) i++;
  }
  return i;
}

// leetcode
function prefixCount2(words: string[], pref: string): number {
  return words.filter((word) => word.startsWith(pref)).length;
}
