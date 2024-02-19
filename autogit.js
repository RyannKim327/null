
function hash(str, start, end) {
    let hash = 0;
    for (let i = start; i < end; i++) {
        hash += str.charCodeAt(i);
    }
    return hash;
}

function rabinKarp(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    const patternHash = hash(pattern, 0, m);
    let textHash = hash(text, 0, m);
    
    for (let i = 0; i <= n - m; i++) {
        if (textHash === patternHash) {
            let j = 0;
            for (; j < m; j++) {
                if (text[i + j] !== pattern[j])
                    break;
            }
            if (j === m) {
                console.log(`Pattern found at index ${i}`);
            }
        }

        if (i < n - m) {
            textHash = textHash - text.charCodeAt(i) + text.charCodeAt(i + m);
        }
    }
}

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let pattern = "ipsum";

rabinKarp(text, pattern);
