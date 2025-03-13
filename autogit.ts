class BoyerMooreHorspool {
  /**
   * Searches for a pattern within a text string
   * @param text The text to search in
   * @param pattern The pattern to search for
   * @returns An array of starting indices where the pattern is found
   */
  static search(text: string, pattern: string): number[] {
    // Handle edge cases
    if (pattern.length === 0) return [];
    if (pattern.length > text.length) return [];

    // Create the bad character skip table
    const skipTable = this.createSkipTable(pattern);
    
    // Result array to store all match indices
    const matches: number[] = [];
    
    // Search through the text
    let i = 0;
    while (i <= text.length - pattern.length) {
      let j = pattern.length - 1;
      
      // Compare characters from right to left
      while (j >= 0 && text[i + j] === pattern[j]) {
        j--;
      }
      
      // If full pattern match is found
      if (j < 0) {
        matches.push(i);
        // Move past this match
        i++;
      } else {
        // Use skip table to determine how far to shift
        const skipAmount = skipTable.get(text[i + pattern.length - 1]) 
          ?? pattern.length;
        i += skipAmount;
      }
    }
    
    return matches;
  }

  /**
   * Creates a skip table for the pattern
   * @param pattern The pattern to create a skip table for
   * @returns A Map with skip distances for characters
   */
  private static createSkipTable(pattern: string): Map<string, number> {
    const skipTable = new Map<string, number>();
    
    // Default skip distance is the pattern length
    for (let i = 0; i < pattern.length - 1; i++) {
      skipTable.set(pattern[i], pattern.length - 1 - i);
    }
    
    return skipTable;
  }
}

// Example usage
function testBoyerMooreHorspool() {
  const text = "ABAAABCD";
  const pattern = "ABC";
  
  const matches = BoyerMooreHorspool.search(text, pattern);
  console.log("Matches found at indices:", matches);
}

testBoyerMooreHorspool();
// More examples
console.log(BoyerMooreHorspool.search("hello world", "o")); // [4, 7]
console.log(BoyerMooreHorspool.search("mississippi", "iss")); // [1, 4]
console.log(BoyerMooreHorspool.search("banana", "ana")); // [1, 3]
