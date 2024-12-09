def longest_common_substring(str1, str2):
    m = len(str1)
    n = len(str2)
    
    longest_length = 0
    end_index = 0
    
    # Create a 2D table to store the lengths of longest common suffixes of substrings
    table = [[0] * (n+1) for i in range(m+1)]
    
    for i in range(1, m+1):
        for j in range(1, n+1):
            if str1[i-1] == str2[j-1]:
                table[i][j] = table[i-1][j-1] + 1
                if table[i][j] > longest_length:
                    longest_length = table[i][j]
                    end_index = i - 1
            else:
                table[i][j] = 0
    
    return str1[end_index-longest_length+1:end_index+1]

# Test the function
str1 = "abcdef"
str2 = "xbcde"
print(longest_common_substring(str1, str2))  # Output: "bcde"
