/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let result = 0;
    let lastIndex = new Map();
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        left = Math.max(left, lastIndex.get(char) || 0);
        result = Math.max(result, right - left + 1);
        lastIndex.set(char, right + 1);
    }

    return result;
};

// SLOW
// let result = 0;
// const substring = [];
// for (let i = 0; i < s.length; i++) {
//     let index = substring.indexOf(s[i]);
//     substring.push(s[i]);
//     if (index === -1) {
//         result = Math.max(result, substring.length);
//         console.log(substring);
//     } else {
//         substring.splice(0, index + 1);
//     }
// }
// return result;
