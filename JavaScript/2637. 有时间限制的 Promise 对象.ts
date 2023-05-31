type Fn = (...params: any[]) => Promise<any>

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const promise = fn(...args)
    const timeout = new Promise((_, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded')
      }, t)
    })
    // 可以同时监听两个Promise对象的解决状态，并且只要其中一个先解决（无论是成功还是失败），整个竞争的Promise就会采用相同的状态
    // 没有达到超时时间 ？ 达到超时时间
    return Promise.race([promise, timeout])
  }
}

