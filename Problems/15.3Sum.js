/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const results = [];

    if (nums.length < 3) return results;
    nums = [...nums].sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                results.push([nums[i], nums[j], nums[k]]);

                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    return results;
}
// function threeSum(nums) {
// let result = [];
// let i = 0;
// let j = 1;
// let k = 2;

// while (i < nums.length - 2) {
//     if (
//         i !== j &&
//         j !== k &&
//         i !== k &&
//         nums[i] + nums[j] + nums[k] === 0
//     ) {
//         let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
//         if (
//             !result.some(
//                 (arr) =>
//                     arr[0] === triplet[0] &&
//                     arr[1] === triplet[1] &&
//                     arr[2] === triplet[2]
//             )
//         ) {
//             result.push(triplet);
//         }
//     }
//     k++;
//     if (k >= nums.length) {
//         j++;
//         k = j + 1;
//     }
//     if (j >= nums.length - 1) {
//         i++;
//         j = i + 1;
//         k = j + 1;
//     }
// }
// return result;
// }
