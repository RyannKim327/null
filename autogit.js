def are_anagrams(str1, str2):
    # Remove non-alphabetic characters and convert to lowercase
    str1_clean = ''.join(filter(str.isalpha, str1)).lower()
    str2_clean = ''.join(filter(str.isalpha, str2)).lower()
    
    # Sort the characters of both strings alphabetically
    str1_sorted = ''.join(sorted(str1_clean))
    str2_sorted = ''.join(sorted(str2_clean))
    
    # Compare the sorted strings
    return str1_sorted == str2_sorted

# Test the function
str1 = "listen"
str2 = "silent"
if are_anagrams(str1, str2):
    print("The strings are anagrams.")
else:
    print("The strings are not anagrams.")
