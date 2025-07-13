function distributeCandies(n, limit) {
    function comb2(x) {
        if (x < 2) return 0;
        return (x * (x - 1)) / 2;
    }

    const totalSinLimite = comb2(n + 2);
    const restar1Variable = 3 * comb2(n - limit + 1);
    const sumar2Variables = 3 * comb2(n - 2 * limit);
    const restar3Variables = comb2(n - 3 * limit - 1);

    if (n > 3 * limit) {
        return 0;
    }
    return (
        totalSinLimite - restar1Variable + sumar2Variables - restar3Variables
    );
}
