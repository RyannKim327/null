def first_non_repeating_character(input_string):
    char_count = {}
    
    # Count the occurrences of each character
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

# Example usage
input_string = "aabbccddee"
result = first_non_repeating_character(input_string)
if result:
    print("First non-repeating character:", result)
else:
    print("No non-repeating character found in the string.")
