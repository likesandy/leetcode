function containsDuplicate(nums: number[]): boolean {
  const set = new Set();
  for (const item of nums) {
    if (set.has(item)) return true;
    set.add(item);
  }
  return false;
}
