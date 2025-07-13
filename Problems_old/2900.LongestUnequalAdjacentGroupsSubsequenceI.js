function getLongestSubsequence(words, groups) {
    const result = [];
    let lastGroup = null;

    for (let i = 0; i < words.length; i++) {
        if (result.length === 0 || groups[i] !== lastGroup) {
            result.push(words[i]);
            lastGroup = groups[i];
        }
    }

    return result;
}
