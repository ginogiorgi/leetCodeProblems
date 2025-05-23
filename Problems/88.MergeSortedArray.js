function merge(nums1, m, nums2, n) {
    let totalValues = m + n - 1;

    m--;
    n--;
    while (n >= 0) {
        if (m >= 0 && nums1[m] > nums2[n]) {
            nums1[totalValues] = nums1[m];
            m--;
        } else {
            nums1[totalValues] = nums2[n];
            n--;
        }
        totalValues--;
    }
}
