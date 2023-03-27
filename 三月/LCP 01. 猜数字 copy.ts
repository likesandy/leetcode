function game(guess: number[], answer: number[]): number {
  return guess.filter((item, index) => answer[index] === item).length;
}

console.log(game([1, 2, 3], [1, 2, 3]));

export {};
