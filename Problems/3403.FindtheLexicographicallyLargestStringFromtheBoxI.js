function answerString(word, numFriends) {
    if (numFriends === 1) return word;

    const substringLength = word.length - numFriends + 1;
    let maxSubstring = "";

    for (let i = 0; i < word.length; i++) {
        const currentWord = word.slice(i, substringLength + i);
        if (currentWord > maxSubstring) {
            maxSubstring = currentWord;
        }
    }

    return maxSubstring;
}
