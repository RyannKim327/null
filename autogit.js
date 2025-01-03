def first_repeated_char(input_string):
    char_set = set()
    
    for char in input_string:
        if char in char_set:
            return char
        char_set.add(char)
    
    return None

input_string = "abcdefgha"
repeated_char = first_repeated_char(input_string)

if repeated_char:
    print("First repeated character:", repeated_char)
else:
    print("No repeated characters found.")
