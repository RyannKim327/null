def find_first_repeated_char(input_string):
    seen = {}
    for char in input_string:
        if char in seen:
            return char
        seen[char] = True
    return None

input_string = "abcdefgha"
result = find_first_repeated_char(input_string)
if result:
    print("First repeated character is:", result)
else:
    print("No repeated characters found in the string.")
