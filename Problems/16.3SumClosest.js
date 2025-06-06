function threeSumClosest(nums, target) {
    if (nums.length < 3) return null;
    nums.sort((a, b) => a - b);

    let result = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (Math.abs(target - sum) < Math.abs(target - result)) {
                result = sum;
            }
            if (sum === target) {
                return sum;
            } else if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
}
