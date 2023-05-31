function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const newArr: number[] = []
  arr.forEach((value, index) => {
    newArr.push(fn(value, index))
  })
  return newArr
}

