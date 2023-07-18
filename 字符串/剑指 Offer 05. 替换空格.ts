function replaceSpace(s: string): string {
  const spaceCount = statsSpace(s)
  // “ ” -> "%20" 一个变三个
  const newArrLength = s.length + spaceCount * 2
  const newArr: string[] = new Array(newArrLength)

  // 遇到空格时插入 "%20"
  // 不能使用s的位置指针
  // 因为每次插入,索引都会+3
  // 如果使用s的索引的话，就不符合要求了
  let newIndex = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      newArr[newIndex++] = '%'
      newArr[newIndex++] = '2'
      newArr[newIndex++] = '0'
    } else {
      newArr[newIndex++] = s[i]
    }
  }

  return newArr.join('')
}

function statsSpace(s: string): number {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') count++
  }

  return count
}

replaceSpace('We are happy.')

