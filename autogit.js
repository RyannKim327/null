function isPalindrome(s) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[\W_]/g, '');
    
    let start = 0;
    let end = s.length - 1;

    // Compare characters from the start and end of the string
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

// Test the function with some examples
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
