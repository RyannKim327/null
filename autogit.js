function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // Characters at the left and right don't match, not a palindrome
        }
        left++;
        right--;
    }

    return true; // All characters matched, it's a palindrome
}

// Test the function
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
