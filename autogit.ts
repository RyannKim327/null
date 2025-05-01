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
                length = lps[length - 1]; // Use the previous lps value
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}
function KMPsearch(text: string, pattern: string): number[] {
    const m = pattern.length;
    const n = text.length;
    const lps = computeLPSArray(pattern);
    const result: number[] = []; // Array to store the indexes of matches

    let i = 0; // Index for text[]
    let j = 0; // Index for pattern[]

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            // Pattern found at index (i - j)
            result.push(i - j);
            j = lps[j - 1]; // Use the LPS to find the next positions to match
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use the previous LPS value
            } else {
                i++;
            }
        }
    }

    return result; // Return the array of starting indexes of matches
}
const text = "ababcababcabc";
const pattern = "abc";
const result = KMPsearch(text, pattern);

console.log("Pattern found at indexes:", result);
