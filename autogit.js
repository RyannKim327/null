function BoyerMoore(text, pattern) {
    var m = pattern.length;
    var n = text.length;

    if (m === 0) return 0;

    var last = {};
    for (var i = 0; i < m; i++) {
        last[pattern.charAt(i)] = i;
    }

    var i = m - 1;
    var k = m - 1;

    while (i < n) {
        if (text.charAt(i) === pattern.charAt(k)) {
            if (k === 0) {
                return i;
            }
            i--;
            k--;
        } else {
            i += m - Math.min(k, 1 + last[text.charAt(i)]);
            k = m - 1;
        }
    }

    return -1;
}

// Test the implementation
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
var pattern = "consectetur";
var index = BoyerMoore(text, pattern);

if (index !== -1) {
    console.log("Pattern found at index: " + index);
} else {
    console.log("Pattern not found in the text.");
}
