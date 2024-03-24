function buildPatternTable(pattern) {
    let table = [0];
    let i = 1;
    let j = 0;

    while (i < pattern.length) {
        if (pattern[i] === pattern[j]) {
            table[i] = j + 1;
            i++;
            j++;
        } else {
            if (j !== 0) {
                j = table[j - 1];
            } else {
                table[i] = 0;
                i++;
            }
        }
    }

    return table;
}

function kmpSearch(text, pattern) {
    let table = buildPatternTable(pattern);
    let i = 0;
    let j = 0;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            if (j === pattern.length - 1) {
                return i - j;
            } else {
                i++;
                j++;
            }
        } else {
            if (j !== 0) {
                j = table[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1;
}
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";

let index = kmpSearch(text, pattern);

if (index !== -1) {
    console.log("Pattern found at index: " + index);
} else {
    console.log("Pattern not found");
}
