function naiveStringMatch(text: string, pattern: string): number[] {
    const result: number[] = [];
    
    for (let i = 0; i <= text.length - pattern.length; i++) {
        let j;
        for (j = 0; j < pattern.length; j++) {
            if (text[i + j] !== pattern[j]) {
                break;
            }
        }
        
        if (j === pattern.length) {
            result.push(i);
        }
    }
    
    return result;
}
function computeLPSArray(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function kmpStringMatch(text: string, pattern: string): number[] {
    const result: number[] = [];
    const lps = computeLPSArray(pattern);

    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            result.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return result;
}
function rabinKarpStringMatch(text: string, pattern: string): number[] {
    const result: number[] = [];
    const prime = 101;
    const d = 256; // number of characters in the input alphabet
    
    let patternHash = 0;
    let textHash = 0;
    let h = 1;

    // Calculate h = d^(m-1)
    for (let i = 0; i < pattern.length - 1; i++) {
        h = (h * d) % prime;
    }

    // Calculate initial hashes
    for (let i = 0; i < pattern.length; i++) {
        patternHash = (d * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (d * textHash + text.charCodeAt(i)) % prime;
    }

    // Slide the pattern over text one by one
    for (let i = 0; i <= text.length - pattern.length; i++) {
        // Check if hashes match
        if (patternHash === textHash) {
            // Check character by character
            let j;
            for (j = 0; j < pattern.length; j++) {
                if (text[i + j] !== pattern[j]) {
                    break;
                }
            }

            if (j === pattern.length) {
                result.push(i);
            }
        }

        // Calculate hash for next window of text
        if (i < text.length - pattern.length) {
            textHash = (d * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + pattern.length)) % prime;

            // Convert negative hash to positive
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }

    return result;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

console.log("Naive Match:", naiveStringMatch(text, pattern));
console.log("KMP Match:", kmpStringMatch(text, pattern));
console.log("Rabin-Karp Match:", rabinKarpStringMatch(text, pattern));
