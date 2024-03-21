function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

// Test the function
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
