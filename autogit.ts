function areAnagrams(str1: string, str2: string): boolean {
    // Helper function to clean and sort the string
    const cleanAndSort = (str: string): string => {
        return str
            .replace(/\W/g, '') // Remove non-alphanumeric characters
            .toLowerCase()      // Convert to lowercase
            .split('')          // Split into an array of characters
            .sort()             // Sort the array
            .join('');         // Join back into a string
    };

    return cleanAndSort(str1) === cleanAndSort(str2);
}

// Example usage:
const string1 = "Listen";
const string2 = "Silent";

console.log(areAnagrams(string1, string2)); // Output: true
