function isValidPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Initialize two pointers, one pointing to the start of the string and the other to the end
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        // Compare characters at the left and right pointers
        if (str[left] !== str[right]) {
            return false; // If characters don't match, not a palindrome
        }
        
        // Move the pointers towards the center
        left++;
        right--;
    }
    
    return true; // If we reach this point, it's a valid palindrome
}

// Test the function
console.log(isValidPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isValidPalindrome("race a car")); // Output: false
