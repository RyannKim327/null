function preprocessPattern(pattern) {
    let prefix = new Array(pattern.length).fill(0);
    let j = 0;
    
    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = prefix[j - 1];
        }
        
        if (pattern[i] === pattern[j]) {
            j++;
        }
        
        prefix[i] = j;
    }
    
    return prefix;
}

function kmpSearch(text, pattern) {
    let prefix = preprocessPattern(pattern);
    let j = 0;

    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text[i] !== pattern[j]) {
            j = prefix[j - 1];
        }

        if (text[i] === pattern[j]) {
            j++;
        }

        if (j === pattern.length) {
            console.log(`Pattern found at index ${i - j + 1}`);
            j = prefix[j - 1];
        }
    }
}

// Test the algorithm
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";
kmpSearch(text, pattern);
