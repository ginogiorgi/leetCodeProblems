function twoSum(nums, target) {
  const numsValues = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numsValues) {
      return [numsValues[complement], i];
    }
    numsValues[nums[i]] = i;
  }
  return console.log("Values not found!");
}
