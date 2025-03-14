class KMPSearch {
  /**
   * Compute the Longest Proper Prefix which is also Suffix (LPS) array
   * This is used to optimize the search process
   * @param pattern The pattern to search for
   * @returns An array representing the LPS values
   */
  private computeLPSArray(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0);
    let length = 0; // Length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
      if (pattern[i] === pattern[length]) {
        // If characters match, increase length and update LPS
        length++;
        lps[i] = length;
        i++;
      } else {
        // If characters don't match
        if (length !== 0) {
          // Backtrack to find the next potential match
          length = lps[length - 1];
        } else {
          // No match found
          lps[i] = 0;
          i++;
        }
      }
    }

    return lps;
  }

  /**
   * Perform KMP search to find all occurrences of a pattern in a text
   * @param text The text to search in
   * @param pattern The pattern to search for
   * @returns An array of starting indices where the pattern is found
   */
  search(text: string, pattern: string): number[] {
    // Edge cases
    if (!pattern) return [];
    if (!text) return [];

    // Compute the LPS array for the pattern
    const lps = this.computeLPSArray(pattern);
    
    const results: number[] = [];
    let i = 0; // Index for text
    let j = 0; // Index for pattern

    while (i < text.length) {
      // If characters match, move both pointers
      if (pattern[j] === text[i]) {
        i++;
        j++;
      }

      // Pattern fully matched
      if (j === pattern.length) {
        results.push(i - j);
        // Continue searching by updating j
        j = lps[j - 1];
      } 
      // Mismatch after some matches
      else if (i < text.length && pattern[j] !== text[i]) {
        // If j is not at the start, use LPS to skip comparisons
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          // Move to next character in text
          i++;
        }
      }
    }

    return results;
  }
}

// Example usage
function main() {
  const kmp = new KMPSearch();
  
  const text = "ABABDABACDABABCABAB";
  const pattern = "ABABCABAB";
  
  const occurrences = kmp.search(text, pattern);
  
  console.log("Pattern found at indices:", occurrences);
}

main();
