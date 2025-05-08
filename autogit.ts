function isPalindrome(input: string): boolean {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    const normalizedString = input
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    // Reverse the normalized string
    const reversedString = normalizedString.split("").reverse().join("");

    // Compare the normalized string with its reversed version
    return normalizedString === reversedString;
}

// Example usage:
const testString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(testString)); // Output: true
