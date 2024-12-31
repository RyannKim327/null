def are_anagrams(str1, str2):
    # Removing spaces and converting strings to lowercase
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()

    # Check if the length of the two strings is the same
    if len(str1) != len(str2):
        return False

    # Sorting the characters of the string and comparing them
    return sorted(str1) == sorted(str2)

# Test the function
string1 = "Listen"
string2 = "Silent"
if are_anagrams(string1, string2):
    print("The strings are anagrams.")
else:
    print("The strings are not anagrams.")
