def is_anagram(str1, str2):
    str1 = str1.lower().replace(' ', '').replace(',', '')
    str2 = str2.lower().replace(' ', '').replace(',', '')
    
    return sorted(str1) == sorted(str2)

# Test the function
string1 = "Listen"
string2 = "Silent"
if is_anagram(string1, string2):
    print(f"{string1} and {string2} are anagrams.")
else:
    print(f"{string1} and {string2} are not anagrams.")
