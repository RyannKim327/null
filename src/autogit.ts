function isPalindrome(input: string): boolean {
    // Step 1: Normalize the string
    const normalized = input
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters

    // Step 2: Reverse the normalized string
    const reversed = normalized.split("").reverse().join("");

    // Step 3: Compare the original and reversed strings
    return normalized === reversed;
}

// Example usage:
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
function isPalindrome(input: string): boolean {
    const normalized = input
        .toLowerCase()
        .split("")
        .filter((char) => /[a-z0-9]/.test(char))
        .join("");

    const reversed = normalized.split("").reverse().join("");
    return normalized === reversed;
}
