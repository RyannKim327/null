def are_anagrams(str1, str2):
    # Remove spaces and punctuation, convert to lowercase
    str1 = ''.join(e for e in str1 if e.isalnum()).lower()
    str2 = ''.join(e for e in str2 if e.isalnum()).lower()

    # Check if the sorted characters of the strings are the same
    return sorted(str1) == sorted(str2)

# Example usage
str1 = "Listen"
str2 = "Silent"
if are_anagrams(str1, str2):
    print(f"{str1} and {str2} are anagrams.")
else:
    print(f"{str1} and {str2} are not anagrams.")
