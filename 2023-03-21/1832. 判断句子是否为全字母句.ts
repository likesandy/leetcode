// 遍历求解
// 时间复杂度: O26n
// 空间复杂度: O1
function checkIfPangram(sentence: string): boolean {
  for (let i = 97; i < 123; i++) {
    if (!sentence.includes(String.fromCharCode(i))) return false;
  }
  return true;
}

// 哈希表
// 时间复杂度: On
// 空间复杂度: On
function checkIfPangram1(sentence: string): boolean {
  const charCount = 26;
  const set = new Set(sentence);

  return set.size === charCount;
}

// 位运算
// 时间复杂度: On
// 空间复杂度: O1
// TODO-位运算暂时无法理解
function checkIfPangram(sentence: string): boolean {
  let alphabet = 0;
  for (let i = 0; i < sentence.length; i++) {
    const c = sentence[i];
    alphabet |= 1 << (c.charCodeAt(0) - "a".charCodeAt(0));
  }
  return alphabet == (1 << 26) - 1;
}
