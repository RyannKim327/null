function isPalindrome(s: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lower case
    const normalizedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let left = 0;
    let right = normalizedStr.length - 1;

    while (left < right) {
        if (normalizedStr[left] !== normalizedStr[right]) {
            return false; // Characters don't match
        }
        left++;
        right--;
    }

    return true; // All characters matched
}

// Example usages
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true
