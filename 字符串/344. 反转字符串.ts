function reverseString(s: string[]): void {
  let start = 0
  let end = s.length - 1
  for (; start < end; start++, end--) {
    ;[s[start], s[end]] = [s[end], s[start]]
  }
}

