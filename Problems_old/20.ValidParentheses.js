function isValid(s) {
    const stack = [];
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (let char of s) {
        if (!pairs[char]) {
            stack.push(char);
        } else if (!stack.length || stack[stack.length - 1] !== pairs[char]) {
            return false;
        } else {
            stack.pop();
        }
    }

    return stack.length === 0;
}
