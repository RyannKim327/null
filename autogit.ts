function KMPSearch(text: string, pattern: string): number[] {
    const lps = computeLPSArray(pattern);
    const matches: number[] = [];
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            matches.push(i - j); // Match found, add start index to matches
            j = lps[j - 1]; // Get the next position to match in the pattern
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS to skip unnecessary comparisons
            } else {
                i++;
            }
        }
    }
    return matches;
}

function computeLPSArray(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
    let length = 0; // length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1]; // use the previous LPS value
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matchIndices = KMPSearch(text, pattern);
console.log(matchIndices); // Outputs indices where pattern is found
