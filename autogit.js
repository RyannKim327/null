function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        // Skip non-alphanumeric characters from left
        if (!/[a-zA-Z0-9]/.test(s[i])) {
            i++;
            continue;
        }

        // Skip non-alphanumeric characters from right
        if (!/[a-zA-Z0-9]/.test(s[j])) {
            j--;
            continue;
        }

        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }

    return true;
}

// Test palindrome function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
