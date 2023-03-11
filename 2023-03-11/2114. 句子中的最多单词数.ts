function mostWordsFound(sentences: string[]): number {
  let arr: number[] = [];
  for (const sentence of sentences) {
    arr.push(sentence.split(" ").length);
  }
  console.log(arr);
  return Math.max(...arr);
}

// leetcode 正则
function mostWordsFound2(sentences: string[]): number {
  return Math.max(
    ...sentences.map((sentence) => (sentence.match(/[ ]/g)?.length ?? 0) + 1)
  );
}
