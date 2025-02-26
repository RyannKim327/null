function KMPSearch(pattern: string, text: string): number[] {
    const lps = computeLPSArray(pattern);
    const result: number[] = [];
    let i = 0; // index for text
    let j = 0; // index for pattern
    
    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        
        if (j === pattern.length) {
            result.push(i - j); // Match found, record the index
            j = lps[j - 1]; // Continue searching for other matches
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS to avoid unnecessary comparisons
            } else {
                i++;
            }
        }
    }
    
    return result;
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
                length = lps[length - 1];
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
const indices = KMPSearch(pattern, text);
console.log("Pattern found at indices:", indices);
