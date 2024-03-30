function computePrefixFunction(pattern) {
    const prefixFunc = [0];
    let k = 0;
    for (let q = 1; q < pattern.length; q++) {
        while (k > 0 && pattern[k] !== pattern[q]) {
            k = prefixFunc[k - 1];
        }
        if (pattern[k] === pattern[q]) {
            k++;
        }
        prefixFunc[q] = k;
    }
    return prefixFunc;
}

function kmpStringSearch(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    const prefixFunc = computePrefixFunction(pattern);
    let q = 0;
    const indices = [];
  
    for (let i = 0; i < n; i++) {
        while (q > 0 && pattern[q] !== text[i]) {
            q = prefixFunc[q - 1];
        }
        if (pattern[q] === text[i]) {
            q++;
        }
        if (q === m) {
            indices.push(i - m + 1); // Match found at index (i - m + 1)
            q = prefixFunc[q - 1];
        }
    }
  
    return indices;
}

// Test
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indices = kmpStringSearch(text, pattern);

if (indices.length > 0) {
    console.log(`Pattern found at indices: ${indices}`);
} else {
    console.log('Pattern not found in the text.');
}
