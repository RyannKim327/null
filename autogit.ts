function isPalindrome(input: string): boolean {
    // Normalize the input string
    const normalized = input.replace(/[\W_]/g, '').toLowerCase();
    
    // Reverse the normalized string
    const reversed = normalized.split('').reverse().join('');
    
    // Compare the normalized string with its reversed version
    return normalized === reversed;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
