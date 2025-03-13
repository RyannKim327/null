function findFirstNonRepeatingChar(str: string): string | null {
    // Create a Map to store character frequencies
    const charFrequency = new Map<string, number>();
    
    // First pass: Count the frequency of each character
    for (const char of str) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
    
    // Second pass: Find the first character with frequency 1
    for (const char of str) {
        if (charFrequency.get(char) === 1) {
            return char;
        }
    }
    
    // If no non-repeating character is found
    return null;
}

// Example usage
console.log(findFirstNonRepeatingChar("leetcode")); // Returns "l"
console.log(findFirstNonRepeatingChar("loveleetcode")); // Returns "v"
console.log(findFirstNonRepeatingChar("aabb")); // Returns null
function findFirstNonRepeatingChar(str: string): string | null {
    const charCount: { [key: string]: number } = {};
    
    // Count frequencies
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find first non-repeating
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null;
}
function findFirstNonRepeatingChar(str: string): string | null {
    return [...str].find(char => 
        str.split(char).length === 2
    ) || null;
}
