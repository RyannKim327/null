function rabinKarp(text: string, pattern: string, d: number = 256, q: number = 101): number[] {
    const result: number[] = [];
    const M = pattern.length;
    const N = text.length;
    const patternHash = hash(pattern, M, d, q);
    let textHash = hash(text, M, d, q);
    
    for (let i = 0; i <= N - M; i++) {
        // Check if the hash values are equal
        if (patternHash === textHash) {
            // Further check for actual characters to avoid false positive
            if (text.substring(i, i + M) === pattern) {
                result.push(i); // Store the start index
            }
        }

        // Calculate hash value for the next window
        // Remove leading digit and add trailing digit if not at the end
        if (i < N - M) {
            textHash = (d * (textHash - text.charCodeAt(i) * Math.pow(d, M - 1)) + text.charCodeAt(i + M)) % q;
            // Make sure to have a positive hash value
            if (textHash < 0) {
                textHash += q;
            }
        }
    }
    
    return result;
}

// Helper function to compute initial hash
function hash(string: string, length: number, d: number, q: number): number {
    let h = 0;
    for (let i = 0; i < length; i++) {
        h = (d * h + string.charCodeAt(i)) % q;
    }
    return h;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indices = rabinKarp(text, pattern);
console.log(indices); // Output the starting indices where the pattern is found
