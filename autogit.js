def are_anagrams(str1, str2):
    # Remove spaces and convert both strings to lowercase
    str1 = str1.replace(' ', '').lower()
    str2 = str2.replace(' ', '').lower()
    
    # Check if the sorted strings are equal
    return sorted(str1) == sorted(str2)
    
# Test the function
str1 = "Listen"
str2 = "Silent"
if are_anagrams(str1, str2):
    print("The strings are anagrams!")
else:
    print("The strings are not anagrams.")
