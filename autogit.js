def find_first_repeated_char(input_str):
    chars_seen = set()
    
    for char in input_str:
        if char in chars_seen:
            return char
        else:
            chars_seen.add(char)
    
    return None

input_str = "abcdefgah"
result = find_first_repeated_char(input_str)

if result:
    print("First repeated character in the string is:", result)
else:
    print("No repeated characters found in the string.")
