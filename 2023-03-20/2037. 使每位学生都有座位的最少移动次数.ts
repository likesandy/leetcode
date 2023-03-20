// leetcode
function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  return seats.reduce(
    (pre, cur, curIdx) => pre + Math.abs(cur - students[curIdx]),
    0
  );
}
