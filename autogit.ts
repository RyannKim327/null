function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';

  // Use the first string as the baseline
  const firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    const char = firstStr[i];
    
    // Check all other strings
    for (let j = 1; j < strs.length; j++) {
      // If the character at position i doesn't match or we've reached the end of a string
      if (strs[j][i] !== char || i >= strs[j].length) {
        return firstStr.substring(0, i);
      }
    }
  }

  // If the loop completes, the entire first string is a common prefix
  return firstStr;
}
