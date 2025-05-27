function reverse(x) {
    let result = String(Math.abs(x));
    result = result.split("").reverse().join("");
    result = +result;
    if (!(result >= -2147483648 && result <= 2147483647)) {
        return 0;
    } else if (x < 0) {
        return result * -1;
    } else {
        return result;
    }
}
