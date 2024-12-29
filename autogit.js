def is_anagram(str1, str2):
    return sorted(str1) == sorted(str2)

# Test the function
if is_anagram("listen", "silent"):
    print("The two strings are anagrams.")
else:
    print("The two strings are not anagrams.")
