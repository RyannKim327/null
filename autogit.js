def is_anagram(str1, str2):
    # Remove spaces and convert to lowercase
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()
    
    # Check if the sorted strings are equal
    return sorted(str1) == sorted(str2)

# Test the function
str1 = "listen"
str2 = "silent"
if is_anagram(str1, str2):
    print(f"{str1} and {str2} are anagrams")
else:
    print(f"{str1} and {str2} are not anagrams")
