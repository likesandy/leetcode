function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  let ans = 0;
  let index = ruleKey[0] == "t" ? 0 : ruleKey[0] == "c" ? 1 : 2;
  for (const item of items) {
    if ((item[index] = ruleValue)) ans++;
  }
  return ans;
}

countMatches(
  [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  "color",
  "silver"
);
