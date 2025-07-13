function lengthOfLongestSubstring(s) {
    let substring = [];
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const index = substring.indexOf(s[i]);

        if (index !== -1) {
            substring.splice(0, index + 1);
        }
        substring.push(s[i]);
        maxLength = Math.max(maxLength, substring.length);
    }
    return maxLength;
}

lengthOfLongestSubstring(" ");
