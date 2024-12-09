def find_first_repeated_character(s):
    seen = set()
    
    for char in s:
        if char in seen:
            return char
        seen.add(char)
    
    return None

# Example usage
s = "abcdeaf"
result = find_first_repeated_character(s)
if result:
    print("First repeated character is:", result)
else:
    print("No repeated characters in the string.")
