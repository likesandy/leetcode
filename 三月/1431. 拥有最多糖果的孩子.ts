// 时间复杂度：On
// 空间复杂度：On
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  return candies.map((item) => item + extraCandies >= Math.max(...candies));
}
