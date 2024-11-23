def find_first_repeated_char(input_str):
    chars_seen = set()
    
    for char in input_str:
        if char in chars_seen:
            return char
        else:
            chars_seen.add(char)
    
    return "No repeated character found"

# Test the function
input_str = "abcdefgah"
result = find_first_repeated_char(input_str)
print(f"The first repeated character in '{input_str}' is: {result}")
