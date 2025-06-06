function lengthOfLastWord(s) {
    let result = 0;
    let i = s.length - 1;

    while (i >= 0 && s[i] === " ") {
        i--;
    }

    while (i >= 0 && s[i] !== " ") {
        result++;
        i--;
    }

    return result;
}
