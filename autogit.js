def is_anagram(str1, str2):
    # Convert both strings to lowercase
    str1 = str1.lower()
    str2 = str2.lower()

    # Remove spaces and special characters
    str1 = ''.join(e for e in str1 if e.isalnum())
    str2 = ''.join(e for e in str2 if e.isalnum())

    # Sort both strings
    str1_sorted = sorted(str1)
    str2_sorted = sorted(str2)

    # Compare the sorted strings
    if str1_sorted == str2_sorted:
        return True
    else:
        return False

# Test the function
string1 = "Listen"
string2 = "Silent"
if is_anagram(string1, string2):
    print(f"{string1} and {string2} are anagrams.")
else:
    print(f"{string1} and {string2} are not anagrams.")
