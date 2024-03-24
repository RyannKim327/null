function boyerMooreSearch(text, pattern) {
    let map = buildBadCharMap(pattern);
    let shift = buildSuffixes(pattern);
    
    let n = text.length;
    let m = pattern.length;
    let i = 0;
  
    while (i <= n - m) {
        let j = m - 1;
        
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }
        
        if (j < 0) {
            console.log("Pattern found at index " + i);
            i += shift[0];
        } else {
            let badCharShift = j - map[text[i + j].charCodeAt(0)];

            i += Math.max(badCharShift, shift[j]);
        }
    }
}
  
function buildBadCharMap(pattern) {
    let map = {};
    let m = pattern.length;
  
    for (let i = 0; i < m; i++) {
        map[pattern[i].charCodeAt(0)] = i;
    }
  
    return map;
}
  
function buildSuffixes(pattern) {
    let m = pattern.length;
    let shift = new Array(m).fill(m);
    let f = -1;
    let g = m - 1;
  
    for (let i = m - 2; i >= 0; i--) {
        if (i > g && shift[i + m - 1 - f] < i - g) {
            shift[i] = shift[i + m - 1 - f];
        } else {
            if (i < g) {
                g = i;
            }
            f = i;
        }
    }
  
    return shift;
}
  
// Example usage
let text = "ABAAABCD";
let pattern = "ABC";
boyerMooreSearch(text, pattern);
