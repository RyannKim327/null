function computeLPSArray(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
    let length = 0; // Length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function KMP(searchText: string, pattern: string): number[] {
    const lps = computeLPSArray(pattern);
    const result: number[] = [];
    let i = 0; // index for searchText
    let j = 0; // index for pattern

    while (i < searchText.length) {
        if (pattern[j] === searchText[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            result.push(i - j); // Match found
            j = lps[j - 1]; // Continue to search for the next match
        } else if (i < searchText.length && pattern[j] !== searchText[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS to skip characters
            } else {
                i++;
            }
        }
    }

    return result; // Return the starting indices of found matches
}

// Example Usage
const searchText = "ababcababcabc";
const pattern = "abc";
const matches = KMP(searchText, pattern);
console.log("Pattern found at indices:", matches);
