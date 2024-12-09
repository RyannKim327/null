def check_anagram(str1, str2):
    # Remove white spaces and convert to lowercase
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()
    
    # Check if lengths of both strings are equal
    if len(str1) != len(str2):
        return False
    
    # Sort the characters of both strings and compare
    return sorted(str1) == sorted(str2)

# Test the function
str1 = "listen"
str2 = "silent"
if check_anagram(str1, str2):
    print(f"{str1} and {str2} are anagrams.")
else:
    print(f"{str1} and {str2} are not anagrams.")
