def check_anagram(str1, str2):
    # Removing white spaces and converting to lowercase
    str1_clean = str1.replace(" ", "").lower()
    str2_clean = str2.replace(" ", "").lower()

    # Check if the lengths of the two strings are equal
    if len(str1_clean) != len(str2_clean):
        return False

    # Sort the characters of both strings and compare
    return sorted(str1_clean) == sorted(str2_clean)

# Test the function
str1 = "listen"
str2 = "silent"
if check_anagram(str1, str2):
    print(f"{str1} and {str2} are anagrams.")
else:
    print(f"{str1} and {str2} are not anagrams.")
