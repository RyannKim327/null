def are_anagrams(str1, str2):
    return sorted(str1) == sorted(str2)

str1 = "listen"
str2 = "silent"

if are_anagrams(str1, str2):
    print("The strings are anagrams!")
else:
    print("The strings are not anagrams.")
