function climbStairs(n) {
    if (n <= 3) return n;

    let fn_2 = 2,
        fn_1 = 3;

    for (let i = 4; i <= n; i++) {
        [fn_2, fn_1] = [fn_1, fn_2 + fn_1];
    }
    return fn_1;
}
