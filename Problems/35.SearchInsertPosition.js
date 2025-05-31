function searchInsert(nums, target) {
    if (nums.indexOf(target) !== -1) {
        return nums.indexOf(target);
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (
                !nums[i + 1] ||
                nums[i + 1] < target ||
                !nums[i - 1] ||
                nums[i - 1] > target
            ) {
                return i;
            }
        }
    }
}
