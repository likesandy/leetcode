// 需要忽略ts类型,replaceAll属于es2021的知识,leetcode不支持
function interpret(command: string): string {
  //@ts-ignore
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
}

// leetcode
function interpret2(command: string): string {
  return command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");
}
