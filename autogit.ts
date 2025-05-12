function rabinKarp(text: string, pattern: string): number[] {
    const result: number[] = [];
    const m = pattern.length;
    const n = text.length;
    if (m > n) return result;

    const base = 256; // Number of possible characters (ASCII)
    const prime = 101; // A prime number for modulo operations to reduce collisions

    // Compute initial hash for pattern and first window of text
    let patternHash = 0;
    let windowHash = 0;
    let highestBasePower = 1; // base^(m-1) used in removing leading digit

    // Precompute highestBasePower = pow(base, m-1) % prime
    for (let i = 0; i < m - 1; i++) {
        highestBasePower = (highestBasePower * base) % prime;
    }

    for (let i = 0; i < m; i++) {
        patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
        windowHash = (base * windowHash + text.charCodeAt(i)) % prime;
    }

    // Slide over the text
    for (let i = 0; i <= n - m; i++) {
        // If hash matches, check actual substring
        if (patternHash === windowHash) {
            if (text.substr(i, m) === pattern) {
                result.push(i);
            }
        }

        // Compute hash for next window: remove leading char, add trailing char
        if (i < n - m) {
            windowHash = (base * (windowHash - text.charCodeAt(i) * highestBasePower) + text.charCodeAt(i + m)) % prime;

            // modulo may produce negative, convert to positive
            if (windowHash < 0) {
                windowHash += prime;
            }
        }
    }

    return result;
}
const text = "abracadabra";
const pattern = "abra";
console.log(rabinKarp(text, pattern)); // Output: [0, 7]
