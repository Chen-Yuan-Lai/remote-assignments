function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const numA = nums[i];
    const numB = target - numA;

    if (map.has(numB)) {
      return [map.get(numB), i];
    }
    map.set(numA, i);
  }
  return [-1, -1];
}
/*
  For example:
  twoSum([2, 7, 11, 15], 9);
  Should returns:
  [0, 1]
*/
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 8));
