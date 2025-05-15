function longestCommonPrefix(strs) {
    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        const letter = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== letter) {
                return prefix;
            }
        }
        prefix += letter;
    }

    return prefix;
}

longestCommonPrefix([""]);
