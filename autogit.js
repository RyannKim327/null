def check_anagrams(str1, str2):
    # Remove spaces and punctuation, convert to lowercase, and sort the characters
    str1_sorted = sorted(''.join(e for e in str1 if e.isalnum()).lower())
    str2_sorted = sorted(''.join(e for e in str2 if e.isalnum()).lower())
    
    # Check if the sorted strings are equal
    return str1_sorted == str2_sorted

# Test
str1 = "Listen"
str2 = "Silent"
if check_anagrams(str1, str2):
    print(f"{str1} and {str2} are anagrams.")
else:
    print(f"{str1} and {str2} are not anagrams.")
