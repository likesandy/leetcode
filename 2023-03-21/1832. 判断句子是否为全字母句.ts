function checkIfPangram(sentence: string): boolean {
  for (let i = 97; i < 123; i++) {
    if (!sentence.includes(String.fromCharCode(i))) return false;
  }
  return true;
}
