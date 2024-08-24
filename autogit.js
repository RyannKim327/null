def first_non_repeating_character(input_string):
    char_count = {}
    
    # Count frequency of each character
    for char in input_string:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    
    # Find the first non-repeating character
    for char in input_string:
        if char_count[char] == 1:
            return char
    
    return None  # Return None if no non-repeating character is found

# Example usage
input_string = "hello world"
result = first_non_repeating_character(input_string)
print("The first non-repeating character is:", result)
