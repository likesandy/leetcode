// hashTable
// 时间：Om+n
// 空间：Omin(m+n)
function intersect(nums1: number[], nums2: number[]): number[] {
  const map: Map<number, number> = new Map();
  const result: number[] = [];

  // 将 nums1 中的数字及其出现次数存储到 map 中
  for (const num of nums1) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  // 遍历 nums2 数组，将与 nums1 数组相同的数字添加到结果数组中
  for (const num of nums2) {
    const count = map.get(num) ?? 0;
    if (count > 0) {
      result.push(num);
      map.set(num, count - 1);
    }
  }

  return result;
}
