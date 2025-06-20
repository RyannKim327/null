function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings: remove non-alphanumeric characters and convert to lowercase
    const normalize = (str: string) => 
        str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');

    return normalize(str1) === normalize(str2);
}

// Example Usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
function areAnagrams(str1: string, str2: string): boolean {
    // Helper function to build a frequency map
    const buildFrequencyMap = (str: string): Map<string, number> => {
        const frequency = new Map<string, number>();
        for (const char of str.toLowerCase()) {
            if (/[a-z0-9]/.test(char)) { // Only consider alphanumeric characters
                frequency.set(char, (frequency.get(char) || 0) + 1);
            }
        }
        return frequency;
    };

    const freq1 = buildFrequencyMap(str1);
    const freq2 = buildFrequencyMap(str2);

    // Compare the two frequency maps
    if (freq1.size !== freq2.size) return false;

    for (const [char, count] of freq1) {
        if (freq2.get(char) !== count) return false;
    }

    return true;
}

// Example Usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
