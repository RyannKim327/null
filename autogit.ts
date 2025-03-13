class BoyerMooreHorspool {
  /**
   * Perform Boyer-Moore-Horspool string search
   * @param text The full text to search in
   * @param pattern The pattern to search for
   * @returns Array of starting indices where the pattern is found
   */
  public static search(text: string, pattern: string): number[] {
    // Handle edge cases
    if (pattern.length === 0 || text.length === 0) {
      return [];
    }

    // Create bad character heuristic table
    const badCharTable = this.createBadCharTable(pattern);

    // Results array to store match indices
    const matches: number[] = [];

    // Search through the text
    let i = 0;
    while (i <= text.length - pattern.length) {
      let j = pattern.length - 1;

      // Try to match the pattern from right to left
      while (j >= 0 && text[i + j] === pattern[j]) {
        j--;
      }

      // If full pattern matched
      if (j < 0) {
        matches.push(i);
        // Move past this match
        i++;
      } else {
        // Use bad character heuristic to shift
        const charToShift = text[i + pattern.length - 1];
        i += badCharTable.get(charToShift) ?? pattern.length;
      }
    }

    return matches;
  }

  /**
   * Create bad character heuristic table
   * @param pattern The pattern to create the table for
   * @returns Map of characters to their shift distances
   */
  private static createBadCharTable(pattern: string): Map<string, number> {
    const badCharTable = new Map<string, number>();

    // Default shift is the pattern length
    const defaultShift = pattern.length;

    // Populate the table with shifts for each character
    for (let i = 0; i < pattern.length - 1; i++) {
      badCharTable.set(pattern[i], pattern.length - 1 - i);
    }

    return badCharTable;
  }
}

// Example usage
function demonstrateBoyerMooreHorspool() {
  const text = "ABAAABCD ABAAABCD";
  const pattern = "ABAAABCD";

  const matches = BoyerMooreHorspool.search(text, pattern);
  
  console.log("Text:", text);
  console.log("Pattern:", pattern);
  console.log("Matches found at indices:", matches);
}

demonstrateBoyerMooreHorspool();
Text: ABAAABCD ABAAABCD
Pattern: ABAAABCD
Matches found at indices: [0, 9]
