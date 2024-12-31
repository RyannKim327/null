def are_anagrams(str1, str2):
    # Remove spaces and convert strings to lowercase
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()

    # Check if the strings have the same length
    if len(str1) != len(str2):
        return False

    # Check if the sorted characters in both strings are equal
    return sorted(str1) == sorted(str2)

# Example usage
str1 = "listen"
str2 = "silent"

if are_anagrams(str1, str2):
    print("The strings are anagrams.")
else:
    print("The strings are not anagrams.")
