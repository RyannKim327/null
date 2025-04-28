function firstNonRepeatingCharacter(str: string): string | null {
    const charCount: Record<string, number> = {};

    // Count the frequency of each character
    for (const ch of str) {
        charCount[ch] = (charCount[ch] || 0) + 1;
    }

    // Find the first character with a count of 1
    for (const ch of str) {
        if (charCount[ch] === 1) {
            return ch;
        }
    }

    // If no non-repeating character is found
    return null;
}
