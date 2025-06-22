function longestCommonPrefix(strings: string[]): string {
    // Handle edge case: if the array is empty, return an empty string
    if (strings.length === 0) {
        return "";
    }

    // Start with the first string as the initial prefix
    let prefix = strings[0];

    // Iterate through the rest of the strings
    for (let i = 1; i < strings.length; i++) {
        const currentString = strings[i];
        let j = 0;

        // Compare characters of the current string with the prefix
        while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
            j++;
        }

        // Update the prefix to the matched portion
        prefix = prefix.substring(0, j);

        // If the prefix becomes empty, no common prefix exists
        if (prefix === "") {
            return "";
        }
    }

    return prefix;
}
const strings1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings1)); // Output: "fl"

const strings2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strings2)); // Output: ""

const strings3 = ["interspecies", "interstellar", "interstate"];
console.log(longestCommonPrefix(strings3)); // Output: "inters"

const strings4 = [];
console.log(longestCommonPrefix(strings4)); // Output: ""

const strings5 = ["single"];
console.log(longestCommonPrefix(strings5)); // Output: "single"
