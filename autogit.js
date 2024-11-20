def are_anagrams(str1, str2):
    # Remove spaces and convert to lowercase
    str1 = str1.replace(' ', '').lower()
    str2 = str2.replace(' ', '').lower()

    # Check if the lengths of the strings are equal
    if len(str1) != len(str2):
        return False

    # Sort the characters of the strings and compare them
    return sorted(str1) == sorted(str2)

# Test the function
str1 = "listen"
str2 = "silent"
if are_anagrams(str1, str2):
    print("The strings are anagrams.")
else:
    print("The strings are not anagrams.")
