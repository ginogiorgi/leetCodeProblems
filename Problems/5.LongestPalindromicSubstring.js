function longestPalindrome(s) {
    let bestResult = "";

    function palindromSearch(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        let oddPalindrome = palindromSearch(i, i);
        let evenPalindrome = palindromSearch(i, i + 1);

        let longerPalindrome =
            oddPalindrome.length > evenPalindrome.length
                ? oddPalindrome
                : evenPalindrome;

        if (longerPalindrome.length > bestResult.length) {
            bestResult = longerPalindrome;
        }
    }

    return bestResult;
}
