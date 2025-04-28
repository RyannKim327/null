function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Optional: Skip non-alphanumeric characters if you want to ignore spaces/punctuation
        // while (!isAlphaNumeric(s[left])) left++;
        // while (!isAlphaNumeric(s[right])) right--;

        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}
