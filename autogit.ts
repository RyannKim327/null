function KMPSearch(pattern: string, text: string): number[] {
    const lps = computeLPS(pattern);
    const matches: number[] = [];
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            matches.push(i - j); // a match was found
            j = lps[j - 1];
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return matches;
}

function computeLPS(pattern: string): number[] {
    const lps: number[] = Array(pattern.length).fill(0);
    let len = 0; // Length of the previous longest prefix suffix
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

// Example usage:
const text = "ababcabcabababd";
const pattern = "ababd";
const result = KMPSearch(pattern, text);
console.log(result); // Output: [10]
function BoyerMooreSearch(pattern: string, text: string): number[] {
    const matches: number[] = [];
    const badCharShift = preprocessBadChar(pattern);
    const m = pattern.length;
    const n = text.length;

    let s = 0; // Shift of the pattern with respect to text
    while (s <= n - m) {
        let j = m - 1;

        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        if (j < 0) {
            matches.push(s); // A match was found
            s += (s + m < n) ? m - badCharShift[text.charCodeAt(s + m)] : 1;
        } else {
            s += Math.max(1, j - badCharShift[text.charCodeAt(s + j)]);
        }
    }

    return matches;
}

function preprocessBadChar(pattern: string): number[] {
    const badCharShift = Array(256).fill(-1); // Assuming ASCII
    for (let i = 0; i < pattern.length; i++) {
        badCharShift[pattern.charCodeAt(i)] = i;
    }
    return badCharShift;
}

// Example usage:
const text2 = "ABABDABACDABABCABAB";
const pattern2 = "ABABCABAB";
const result2 = BoyerMooreSearch(pattern2, text2);
console.log(result2); // Output: [10]
