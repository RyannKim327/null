function isPalindrome(input: string): boolean {
    // Step 1: Normalize the string
    const cleaned = input
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters

    // Step 2: Reverse the cleaned string
    const reversed = cleaned.split('').reverse().join('');

    // Step 3: Compare the cleaned string with its reversed version
    return cleaned === reversed;
}

// Example Usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("!!@#$%^&*()")); // true
