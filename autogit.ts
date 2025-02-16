function KMPSearch(pattern: string, text: string): number[] {
    const lps = computeLPSArray(pattern);
    const occurrences: number[] = [];
    
    let i = 0; // index for text
    let j = 0; // index for pattern
    const M = pattern.length;
    const N = text.length;

    while (i < N) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === M) {
            occurrences.push(i - j); // Found a match
            j = lps[j - 1]; // Continue search
        } else if (i < N && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS array for skipping
            } else {
                i++;
            }
        }
    }

    return occurrences;
}

function computeLPSArray(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
    let length = 0; // length of the previous longest prefix suffix
    let i = 1; // start from the second character
    
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

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const occurrences = KMPSearch(pattern, text);
console.log("Pattern found at indices:", occurrences);
