function computeLPSArray(pattern) {
    let lps = new Array(pattern.length);
    let len = 0;
    lps[0] = 0;
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

function KMP(pattern, text) {
    let lps = computeLPSArray(pattern);
    let i = 0;
    let j = 0;
    let matches = [];

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            matches.push(i - j);
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

// Example usage
let text = "ABCABCDABABCDABCDABDE";
let pattern = "ABCDABD";
let matches = KMP(pattern, text);
console.log("Pattern found at indices:", matches);
