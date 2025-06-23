function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    // Start with the first string as the initial prefix
    let prefix = strs[0];

    // Iterate through each string in the array starting from the second one
    for (let i = 1; i < strs.length; i++) {
        // Compare the current prefix with the next string
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by removing the last character
            prefix = prefix.substring(0, prefix.length - 1);
            // If there's no common prefix
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
function longestCommonPrefixBinarySearch(strs: string[]): string {
    if (strs.length === 0) return "";

    // Find the minimum length among all strings
    let minLen = Math.min(...strs.map(s => s.length));

    let low = 0;
    let high = minLen;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (isCommonPrefix(strs, mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return strs[0].substring(0, Math.floor((low + high) / 2));
}

function isCommonPrefix(strs: string[], len: number): boolean {
    const str1 = strs[0].substring(0, len);
    for (let i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(str1)) {
            return false;
        }
    }
    return true;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefixBinarySearch(strings)); // Output: "fl"
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return ""; // Edge case: empty array
    if (strs.length === 1) return strs[0]; // Edge case: single string

    // Initialize prefix with the first string
    let prefix = strs[0];

    // Iterate over the rest of the strings
    for (let i = 1; i < strs.length; i++) {
        // Reduce the prefix until it matches the start of strs[i]
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return ""; // No common prefix found
        }
    }

    return prefix;
}

// Test cases
const testCases: string[][] = [
    ["flower", "flow", "flight"],
    ["dog", "racecar", "car"],
    ["interspecies", "interstellar", "interstate"],
    ["throne", "dungeon"],
    ["throne"],
    [""],
    []
];

testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}:`, testCase);
    console.log("Longest Common Prefix:", longestCommonPrefix(testCase));
});
Test Case 1: [ 'flower', 'flow', 'flight' ]
Longest Common Prefix: fl
Test Case 2: [ 'dog', 'racecar', 'car' ]
Longest Common Prefix: 
Test Case 3: [ 'interspecies', 'interstellar', 'interstate' ]
Longest Common Prefix: inters
Test Case 4: [ 'throne', 'dungeon' ]
Longest Common Prefix: 
Test Case 5: [ 'throne' ]
Longest Common Prefix: throne
Test Case 6: [ '' ]
Longest Common Prefix: 
Test Case 7: []
Longest Common Prefix: 
