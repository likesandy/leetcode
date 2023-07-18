function reverseWords(s: string): string {
  let chars: string[] = Array.from(s)
  let n = chars.length

  function swap(i: number, j: number): void {
    let temp = chars[i]
    chars[i] = chars[j]
    chars[j] = temp
  }

  function reverse(start: number, end: number): void {
    while (start < end) {
      swap(start++, end--)
    }
  }

  // 移除字符串中的多余空格
  function trimSpaces(): void {
    let i = 0,
      j = 0
    while (j < n) {
      while (j < n && chars[j] === ' ') j++
      while (j < n && chars[j] !== ' ') chars[i++] = chars[j++]
      while (j < n && chars[j] === ' ') j++
      if (j < n) chars[i++] = ' '
    }
    console.log(chars);
    console.log(chars.length)
    chars.length = i
    console.log(chars);
    console.log(chars.length)
  }

  trimSpaces()
  reverse(0, chars.length - 1)

  let start = 0
  for (let end = 0; end < chars.length; end++) {
    if (chars[end] === ' ') {
      reverse(start, end - 1)
      start = end + 1
    }
  }
  reverse(start, chars.length - 1)

  return chars.join('')
}

reverseWords('  the sky is blue')

