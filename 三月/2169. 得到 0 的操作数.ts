function countOperations(num1: number, num2: number): number {
  let i = 0;
  while (num1 && num2) {
    if (num1 >= num2) num1 -= num2;
    else num2 -= num1;
    i++;
  }
  return i;
}
