function romanToInt(s) {
    const romanToModern = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let resultado = 0;
    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length && romanToModern[s[i]] < romanToModern[s[i + 1]]) {
            resultado -= romanToModern[s[i]];
        } else {
            resultado += romanToModern[s[i]];
        }
    }

    return resultado;
}

romanToInt("MCMXCIV");

// function romanToInt(s) {
//     const romanToModern = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//     let resultado = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (
//             (s[i - 1] === "I" && (s[i] === "V" || s[i] === "X")) ||
//             (s[i - 1] === "X" && (s[i] === "L" || s[i] === "C")) ||
//             (s[i - 1] === "C" && (s[i] === "D" || s[i] === "M"))
//         ) {
//             resultado += romanToModern[s[i]] - 2 * romanToModern[s[i - 1]];
//         } else {
//             resultado += romanToModern[s[i]];
//         }
//     }

//     return resultado;
// }

// romanToInt("MCMXCIV");
