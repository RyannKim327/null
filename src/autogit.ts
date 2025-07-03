function KMPSearch(pattern: string, text: string): number[] {
    const m = pattern.length;
    const n = text.length;
    
    // Step 1: Preprocess the pattern to create the LPS array
    const lps = computeLPSArray(pattern);
    
    const result: number[] = []; // To store the indices of the matches
    let i = 0; // index for text
    let j = 0; // index for pattern
    
    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        
        if (j === m) {
            // Found a match, add the start index to the result
            result.push(i - j);
            j = lps[j - 1]; // Continue searching
        } else if (i < n && pattern[j] !== text[i]) {
            // Mismatch after j matches
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS to skip characters
            } else {
                i++; // Move to the next character in text
            }
        }
    }
    
    return result;
}

function computeLPSArray(pattern: string): number[] {
    const m = pattern.length;
    const lps = new Array(m).fill(0); // Create LPS array
    let length = 0; // Length of the previous longest prefix suffix
    let i = 1; // Start from the second character
    
    while (i < m) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            // Mismatch after length matches
            if (length !== 0) {
                length = lps[length - 1]; // Use the previously computed LPS
            } else {
                lps[i] = 0; // No prefix suffix
                i++;
            }
        }
    }
    
    return lps;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = KMPSearch(pattern, text);
console.log(`Pattern found at indices: ${matches.join(', ')}`);
