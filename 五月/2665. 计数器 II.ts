type ReturnObj = {
  increment: () => number
  decrement: () => number
  reset: () => number
}

function createCounter(init: number): ReturnObj {
  let res = init
  return {
    increment: () => res++,
    decrement: () => res--,
    reset: () => init,
  }
}

