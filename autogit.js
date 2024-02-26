function isPalindrome(s) {
    // Using two pointers approach without extra space
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        // Ignore non-alphanumeric characters
        while (i < j && !s[i].match(/[a-z0-9]/i)) i++;
        while (i < j && !s[j].match(/[a-z0-9]/i)) j--;

        // Convert characters to lowercase and compare
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false; // Not a palindrome
        }

        i++;
        j--;
    }

    return true; // It is a palindrome
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
