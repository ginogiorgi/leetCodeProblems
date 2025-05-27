function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const result = new Array(numRows).fill("");
    let direction = 1;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        result[count] += s[i];
        if (count === 0) {
            direction = 1;
        } else if (count === numRows - 1) {
            direction = -1;
        }
        count += direction;
    }
    return result.join("");
}

// if (numRows === 1 || s.length < numRows) {
//     return s;
// }

// const rows = new Array(numRows).fill("");
// let reverse = false;
// let count = 0;

// for (let i = 0; i < s.length; i++) {
//     rows[count] += s[i];
//     reverse ? count-- : count++;
//     if (count === numRows - 1 || count === 0) {
//         reverse = !reverse;
//     }
// }
// return rows.join("");
