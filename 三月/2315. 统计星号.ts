function countAsterisks(s: string): number {
  s.replace(/|.+|/g, "a");
  console.log(s);
  return 2;
}
countAsterisks("l|*e*et|c**o|*de|");

// leetcode
function countAsterisks2(s: string): number {
  let flag = true;
  let count = 0;
  const str = s.replace(/\w/g, "");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "|") {
      flag = !flag;
    }
    if (str[i] === "*" && flag) {
      count++;
    }
  }
  return count;
}
