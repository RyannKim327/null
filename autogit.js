def are_anagrams(str1, str2):
    str1_clean = ''.join(sorted(filter(str.isalnum, str1.lower())))
    str2_clean = ''.join(sorted(filter(str.isalnum, str2.lower())))
    
    return str1_clean == str2_clean

# Test the function
str1 = "Listen"
str2 = "Silent"
if are_anagrams(str1, str2):
    print(f"{str1} and {str2} are anagrams.")
else:
    print(f"{str1} and {str2} are not anagrams.")
