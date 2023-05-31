declare global {
  interface Array<T> {
    last(): T | -1
  }
}

Array.prototype.last = function () {
  return this.at(-1) ?? -1
}

