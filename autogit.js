def are_anagrams(str1, str2):
    # Remove spaces and convert to lowercase
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()

    # Check if lengths are different
    if len(str1) != len(str2):
        return False

    # Sort the characters in both strings and compare
    return sorted(str1) == sorted(str2)

# Test the function
string1 = "Listen"
string2 = "Silent"

if are_anagrams(string1, string2):
    print("The strings are anagrams.")
else:
    print("The strings are not anagrams.")
