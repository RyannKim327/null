function boyerMooreHorspool(haystack: string, needle: string): number[] {
    const needleLength = needle.length;
    const haystackLength = haystack.length;

    if (needleLength === 0) return []; // If the needle is empty, return an empty result
    if (haystackLength < needleLength) return []; // If the haystack is smaller than the needle, return an empty result

    // Create the bad character skip table
    const skipTable: Record<string, number> = {};
    for (let i = 0; i < needleLength; i++) {
        skipTable[needle[i]] = needleLength - i - 1;
    }

    const result: number[] = []; // Store the starting indices of found occurrences
    let i = 0;

    while (i <= haystackLength - needleLength) {
        let j = needleLength - 1;

        // Compare needle with the corresponding section of the haystack
        while (j >= 0 && haystack[i + j] === needle[j]) {
            j--;
        }

        // If we found a match, j will be -1
        if (j < 0) {
            result.push(i); // Record the starting index
            // Shift by the length of the needle, or use the character in the haystack at i + needleLength if it's outside of the needle's last character
            i += (i + needleLength < haystackLength) ? needleLength - (skipTable[haystack[i + needleLength]] || needleLength) : 1;
        } else {
            // Shift based on the skip table, defaulting to the length of the needle if character is not in needle
            const skip = skipTable[haystack[i + j]] || needleLength;
            i += skip;
        }
    }

    return result; // Return all found starting indices
}

// Example usage:
const haystack = "ababcabcabababd";
const needle = "ababd";
const result = boyerMooreHorspool(haystack, needle);
console.log(result); // Output: [10]
