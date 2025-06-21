function longestCommonSubstring(str1: string, str2: string): string {
    const m = str1.length;
    const n = str2.length;

    // Edge case: if either string is empty
    if (m === 0 || n === 0) {
        return "";
    }

    // Initialize DP table with zeros
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    let maxLength = 0;      // To store the length of the longest common substring
    let endIndexStr1 = 0;   // To store the ending index of the substring in str1

    // Build the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;

                // Update maxLength and endIndexStr1 if needed
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndexStr1 = i;
                }
            } else {
                dp[i][j] = 0; // Reset if characters do not match
            }
        }
    }

    // Extract the longest common substring
    if (maxLength === 0) {
        return ""; // No common substring found
    }

    return str1.slice(endIndexStr1 - maxLength, endIndexStr1);
}

// Example usage:
const string1 = "abcdef";
const string2 = "zcdemf";

const result = longestCommonSubstring(string1, string2);
console.log("Longest Common Substring:", result); // Output: "cde"
function longestCommonSubstringOptimized(str1: string, str2: string): string {
    const m = str1.length;
    const n = str2.length;

    if (m === 0 || n === 0) {
        return "";
    }

    // Ensure that str1 is the shorter string to use less space
    if (m < n) {
        [str1, str2] = [str2, str1];
        [m, n] = [n, m];
    }

    // Initialize previous and current DP arrays
    let previous: number[] = Array(n + 1).fill(0);
    let current: number[] = Array(n + 1).fill(0);

    let maxLength = 0;
    let endIndexStr1 = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                current[j] = previous[j - 1] + 1;

                if (current[j] > maxLength) {
                    maxLength = current[j];
                    endIndexStr1 = i;
                }
            } else {
                current[j] = 0;
            }
        }
        // Swap current and previous for next iteration
        [previous, current] = [current, previous];
    }

    if (maxLength === 0) {
        return "";
    }

    return str1.slice(endIndexStr1 - maxLength, endIndexStr1);
}

// Example usage remains the same
