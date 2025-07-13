function isZeroArray(nums, queries) {
    const n = nums.length;
    const diff = new Array(n + 1).fill(0);

    for (let i = 0; i < queries.length; i++) {
        const [start, end] = queries[i];
        if (start < n) diff[start]++;
        if (end < n) diff[end]--;
    }

    let current = 0;
    for (let i = 0; i < n; i++) {
        current += diff[i];
        nums[i] -= current;
        if (nums[i] < 0) return false;
    }

    return nums.every((x) => x === 0);
}

isZeroArray(
    [2],
    [
        [0, 0],
        [0, 0],
    ]
);
