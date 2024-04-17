function isValidPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    // Keep moving pointers towards the center while characters are equal
    while (left < right) {
        if (str.charAt(left) !== str.charAt(right)) {
            return false; // If characters don't match, it's not a palindrome
        }
        left++;
        right--;
    }

    return true; // If all characters match, it's a palindrome
}

// Test the function
console.log(isValidPalindrome("racecar")); // Output: true
console.log(isValidPalindrome("hello")); // Output: false
