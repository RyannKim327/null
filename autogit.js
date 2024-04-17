function isPalindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, ''); // Remove non-alphanumeric characters and convert to lowercase

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // Characters at positions left and right do not match
        }
        left++;
        right--;
    }

    return true; // All characters match, so the string is a palindrome
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
