function triangleType(nums) {
    switch (true) {
        case nums[0] + nums[1] <= nums[2] ||
            nums[0] + nums[2] <= nums[1] ||
            nums[1] + nums[2] <= nums[0]:
            return "none";
        case nums[0] === nums[1] && nums[1] === nums[2]:
            return "equilateral";
        case nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]:
            return "isosceles";
        default:
            return "scalene";
    }
}

triangleType([3, 4, 5]);
