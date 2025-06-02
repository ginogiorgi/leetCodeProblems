function candy(ratings) {
    const length = ratings.length;
    const candy = new Array(length).fill(1);
    let result = 0;

    for (let i = 1; i < length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candy[i] = candy[i - 1] + 1;
        }
    }
    for (let i = length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candy[i] <= candy[i + 1]) {
            candy[i] = candy[i + 1] + 1;
        }
        result += candy[i];
    }
    return result + candy[length - 1];
}
