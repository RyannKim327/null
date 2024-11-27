def is_anagram(str1, str2):
    # Removing spaces and converting strings to lowercase
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()
    
    # Checking the length of the strings
    if len(str1) != len(str2):
        return False
    
    # Sorting the characters in both strings and checking if they are equal
    return sorted(str1) == sorted(str2)

# Test the function
string1 = "Listen"
string2 = "Silent"
if is_anagram(string1, string2):
    print(f"{string1} and {string2} are anagrams.")
else:
    print(f"{string1} and {string2} are not anagrams.")
