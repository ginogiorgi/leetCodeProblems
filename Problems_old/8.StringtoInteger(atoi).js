function myAtoi(s) {
    s = s.trim();
    let sign = 1,
        i = 0,
        result = 0;
    if (s[i] === "-" || s[i] === "+") {
        if (s[i] === "-") sign = -1;
        i++;
    }
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        result = result * 10 + (s[i].charCodeAt(0) - "0".charCodeAt(0));
        i++;
    }
    result *= sign;
    if (result < -2147483648) return -2147483648;
    if (result > 2147483647) return 2147483647;
    return result;
}
