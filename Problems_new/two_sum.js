/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    num_map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (num_map.has(complement)) {
            return [num_map.get(complement), i];
        } else {
            num_map.set(nums[i], i);
        }
    }
};

twoSum([3, 2, 4], 6);

// SLOW
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let k = i + 1; k < nums.length; k++) {
//             if (nums[i] + nums[k] === target) {
//                 return [i, k];
//             }
//         }
//     }
// };
