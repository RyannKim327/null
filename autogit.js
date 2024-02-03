function boyerMooreSearch(text, pattern) {
    // Preprocessing
    var lastTable = buildLastTable(pattern);
    var n = text.length;
    var m = pattern.length;
    var i = m - 1; // Text pointer
    var j = m - 1; // Pattern pointer

    while (i < n) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                // Pattern matches
                return i;
            }
            // Matched, continue comparing
            i--;
            j--;
        } else {
            // Mismatch, shift the pattern
            i = i + m - Math.min(j, 1 + lastTable[text[i].charCodeAt(0)]);
            j = m - 1;
        }
    }

    // Pattern not found
    return -1;
}

function buildLastTable(pattern) {
    var lastTable = {};
    var m = pattern.length;

    // Initialize all characters as -1
    for (var i = 0; i < 256; i++) {
        lastTable[i] = -1;
    }

    // Update last occurrence of characters in the pattern
    for (var j = 0; j < m; j++) {
        lastTable[pattern[j].charCodeAt(0)] = j;
    }

    return lastTable;
}

// Usage example
var text = "Hello, world!";
var pattern = "world";
var index = boyerMooreSearch(text, pattern);
console.log(index); // Output: 7 (index of the pattern in the text)
