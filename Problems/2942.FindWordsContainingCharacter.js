function findWordsContaining(words, x) {
    let foundIndexes = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].indexOf(x) !== -1) {
            foundIndexes.push(i);
        }
    }
    return foundIndexes;
}
