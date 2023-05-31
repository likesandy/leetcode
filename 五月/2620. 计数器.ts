function createCounter(n: number): () => number {
  return function () {
    return n++
  }
}

// 考虑纯函数
function createCounter(n: number): () => number {
  let res = n
  return function () {
    return res++
  }
}

