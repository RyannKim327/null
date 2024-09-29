def longest_common_substring(str1, str2):
    m = len(str1)
    n = len(str2)
    
    # Create a 2D table to store the lengths of the longest common suffixes of substrings
    table = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Initialize variables to store the length of the longest common substring and its ending position
    max_length = 0
    end_index = 0
    
    # Fill the table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                table[i][j] = table[i - 1][j - 1] + 1
                if table[i][j] > max_length:
                    max_length = table[i][j]
                    end_index = i
            else:
                table[i][j] = 0
    
    # Retrieve the longest common substring
    longest_substring = str1[end_index - max_length: end_index]
    
    return longest_substring

# Test the function
str1 = "abcdef"
str2 = "cde"
print(longest_common_substring(str1, str2))  # Output: "cde"
