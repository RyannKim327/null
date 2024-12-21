def first_non_repeating_char(input_string):
    char_count = {}
    
    # Get the frequency of each character in the input string
    for char in input_string:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1

    # Find the first non-repeating character
    for char in input_string:
        if char_count[char] == 1:
            return char

    return None

# Test the function
input_string = "hello world"
result = first_non_repeating_char(input_string)
if result:
    print("The first non-repeating character is:", result)
else:
    print("No non-repeating character found in the string.")
