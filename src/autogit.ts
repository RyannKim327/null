/**
 * Finds the longest common substring between two strings.
 * 
 * @param str1 - First string.
 * @param str2 - Second string.
 * @returns The longest common substring.
 */
function longestCommonSubstring(str1: string, str2: string): string {
    const m = str1.length;
    const n = str2.length;

    // Edge case: if either string is empty
    if (m === 0 || n === 0) {
        return "";
    }

    // Initialize the DP table with zeros
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    let maxLength = 0;      // To store the length of the longest common substring
    let endIndexStr1 = 0;   // To store the ending index of the substring in str1

    // Build the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndexStr1 = i;
                }
            } else {
                dp[i][j] = 0; // No common substring at this cell
            }
        }
    }

    // If no common substring found
    if (maxLength === 0) {
        return "";
    }

    // Extract the longest common substring from str1
    return str1.substring(endIndexStr1 - maxLength, endIndexStr1);
}

// Example usage:
const str1 = "abcdef";
const str2 = "zcdemf";

const result = longestCommonSubstring(str1, str2);
console.log("Longest Common Substring:", result); // Output: "cde"
function longestCommonSubstringOptimized(str1: string, str2: string): string {
    const m = str1.length;
    const n = str2.length;

    if (m === 0 || n === 0) {
        return "";
    }

    // Ensure str1 is the shorter string to use less space
    if (m > n) {
        [str1, str2] = [str2, str1];
        [m, n] = [n, m];
    }

    const dp: number[] = Array(n + 1).fill(0);
    let maxLength = 0;
    let endIndexStr1 = 0;

    for (let i = 1; i <= m; i++) {
        // Traverse backwards to avoid overwriting needed values
        for (let j = n; j >= 1; j--) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[j] = dp[j - 1] + 1;
                if (dp[j] > maxLength) {
                    maxLength = dp[j];
                    endIndexStr1 = i;
                }
            } else {
                dp[j] = 0;
            }
        }
    }

    if (maxLength === 0) {
        return "";
    }

    return str1.substring(endIndexStr1 - maxLength, endIndexStr1);
}

// Example usage remains the same
