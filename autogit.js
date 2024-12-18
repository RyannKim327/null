def first_repeated_char(input_string):
    char_count = {}
    
    for char in input_string:
        if char in char_count:
            return char
        char_count[char] = 1
    
    return None

# Test the function
input_string = "hello"
result = first_repeated_char(input_string)
if result:
    print(f"The first repeated character in the string is: {result}")
else:
    print("No repeated characters found")
