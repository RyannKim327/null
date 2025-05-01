function areAnagrams(str1: string, str2: string): boolean {
    // Helper function to clean and sort the string
    const cleanAndSort = (str: string): string => {
        return str
            .replace(/[^a-zA-Z]/g, '') // Remove non-alphabetic characters
            .toLowerCase()              // Convert to lowercase
            .split('')                  // Split into an array of characters
            .sort()                     // Sort the characters
            .join('');                  // Join back into a string
    };

    // Clean and sort both strings
    const sortedStr1 = cleanAndSort(str1);
    const sortedStr2 = cleanAndSort(str2);

    // Return true if sorted strings are equal, false otherwise
    return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
console.log(areAnagrams("A gentleman", "Elegant man")); // true
