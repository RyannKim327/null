def are_anagrams(str1, str2):
    # Convert strings to lowercase and remove spaces
    str1 = str1.lower().replace(" ", "")
    str2 = str2.lower().replace(" ", "")
    
    # Sort characters in the strings
    sorted_str1 = sorted(str1)
    sorted_str2 = sorted(str2)
    
    # Check if the sorted strings are equal
    if sorted_str1 == sorted_str2:
        return True
    else:
        return False

# Test the function
string1 = "Listen"
string2 = "Silent"
if are_anagrams(string1, string2):
    print(f"{string1} and {string2} are anagrams.")
else:
    print(f"{string1} and {string2} are not anagrams.")
