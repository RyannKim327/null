const strs = ["flower", "flow", "flight"];
// Longest Common Prefix: "fl"
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    let prefix = "";

    // Find the minimum length among all strings to avoid out-of-bound errors
    const minLength = Math.min(...strs.map(str => str.length));

    for (let i = 0; i < minLength; i++) {
        // Take the character from the first string as reference
        const char = strs[0][i];

        // Check if this character is present at the same position in all strings
        let allMatch = true;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                allMatch = false;
                break;
            }
        }

        if (allMatch) {
            prefix += char;
        } else {
            break;
        }
    }

    return prefix;
}
function longestCommonPrefixHorizontal(strs: string[]): string {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
}
function longestCommonPrefixBinarySearch(strs: string[]): string {
    if (strs.length === 0) return "";

    let minLen = Number.MAX_SAFE_INTEGER;
    for (const str of strs) {
        minLen = Math.min(minLen, str.length);
    }

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
const strings1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings1)); // Output: "fl"

const strings2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strings2)); // Output: ""

const strings3 = ["interspecies", "interstellar", "interstate"];
console.log(longestCommonPrefix(strings3)); // Output: "inters"

const strings4 = [];
console.log(longestCommonPrefix(strings4)); // Output: ""

const strings5 = ["onlyone"];
console.log(longestCommonPrefix(strings5)); // Output: "onlyone"
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    let prefix = "";
    const minLength = Math.min(...strs.map(str => str.length));

    for (let i = 0; i < minLength; i++) {
        const char = strs[0][i];
        let allMatch = true;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                allMatch = false;
                break;
            }
        }
        if (allMatch) {
            prefix += char;
        } else {
            break;
        }
    }

    return prefix;
}

// Example usage:
const examples = [
    ["flower", "flow", "flight"],
    ["dog", "racecar", "car"],
    ["interspecies", "interstellar", "interstate"],
    [],
    ["onlyone"]
];

examples.forEach((example, index) => {
    console.log(`Example ${index + 1}:`, longestCommonPrefix(example));
});
Example 1: fl
Example 2: 
Example 3: inters
Example 4: 
Example 5: onlyone
