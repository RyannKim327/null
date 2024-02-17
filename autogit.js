function kmpSearch(text, pattern) {
    const patternLength = pattern.length;
    const textLength = text.length;

    // Generate the lps (longest proper prefix which is also a suffix) array for the pattern
    const lps = new Array(patternLength).fill(0);
    let j = 0;

    generateLPSArray();

    let i = 0;
    while (i < textLength) {
        if (pattern[j] === text[i]) {
            j++;
            i++;
        }

        if (j === patternLength) {
            console.log("Pattern found at index " + (i - j));
            j = lps[j - 1];
        } else if (i < textLength && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    function generateLPSArray() {
        let len = 0;
        let i = 1;

        while (i < patternLength) {
            if (pattern[i] === pattern[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len !== 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = len;
                    i++;
                }
            }
        }
    }
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

kmpSearch(text, pattern);
