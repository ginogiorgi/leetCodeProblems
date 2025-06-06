/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    if (digits.length === 0) return [];

    const phoneMap = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const output = [];

    function backtrack(combination, next_digits, phoneMap, output) {
        if (next_digits.length === 0) {
            output.push(combination);
        } else {
            const letters = phoneMap[next_digits[0] - 2];
            for (let i = 0; i < letters.length; i++) {
                backtrack(
                    combination + letters[i],
                    next_digits.slice(1),
                    phoneMap,
                    output
                );
            }
        }
    }
    backtrack("", digits, phoneMap, output);
    return output;
}
