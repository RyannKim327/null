def are_anagrams(str1, str2):
    str1 = str1.lower().replace(" ", "").replace(",", "").replace(".", "")
    str2 = str2.lower().replace(" ", "").replace(",", "").replace(".", "")

    return sorted(str1) == sorted(str2)

# Test the function
str1 = "Listen"
str2 = "Silent"
if are_anagrams(str1, str2):
    print(f"'{str1}' and '{str2}' are anagrams.")
else:
    print(f"'{str1}' and '{str2}' are not anagrams.")
