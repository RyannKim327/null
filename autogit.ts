function isPalindrome(str: string): boolean {
    // Normalize the string: remove non-alphanumeric, convert to lowercase
    const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // Check if cleaned string is the same forwards and backwards
    return cleaned === cleaned.split('').reverse().join('');
}

// Example
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
