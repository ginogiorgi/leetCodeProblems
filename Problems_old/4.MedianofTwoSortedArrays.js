function findMedianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const len = merged.length;
    const mid = Math.floor(len / 2);
    console.log(
        len % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid]
    );
}

findMedianSortedArrays([1, 2], [3, 4]);
