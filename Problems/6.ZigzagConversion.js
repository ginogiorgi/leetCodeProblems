function convert(s, numRows) {
    if (numRows === 1 || s.length < numRows) {
        return s;
    }

    const rows = new Array(numRows).fill("");
    let reverse = false;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        rows[count] += s[i];
        reverse ? count-- : count++;
        if (count === numRows - 1 || count === 0) {
            reverse = !reverse;
        }
    }
    return rows.join("");
}
