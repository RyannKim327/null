function computeLPSArray(pattern) {
    let lps = new Array(pattern.length).fill(0);
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

function KMP(text, pattern) {
    let result = [];
    let lps = computeLPSArray(pattern);
    let i = 0;
    let j = 0;

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

// Example usage
let text = "ABABDABACDABABCABAB";
let pattern = "ABAB";
let result = KMP(text, pattern);

console.log(result); // Output: [0, 10, 15]
