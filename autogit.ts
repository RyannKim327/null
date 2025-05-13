function isPalindrome(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // optional: ignore case and non-alphanumeric
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("Racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
