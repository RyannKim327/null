def first_repeated_char(input_string):
    char_set = set()
    for char in input_string:
        if char in char_set:
            return char
        char_set.add(char)
    return None

input_string = "abcdefga"
result = first_repeated_char(input_string)
if result:
    print("First repeated character is:", result)
else:
    print("No repeated characters found.")
