def first_non_repeating_char(input_string):
    char_freq = {}
    
    # Count the frequency of each character
    for char in input_string:
        if char in char_freq:
            char_freq[char] += 1
        else:
            char_freq[char] = 1
    
    # Find the first non-repeating character
    for char in input_string:
        if char_freq[char] == 1:
            return char
    
    return None

# Test the function
input_string = "hello world"
result = first_non_repeating_char(input_string)
if result:
    print("The first non-repeating character is:", result)
else:
    print("No non-repeating character found in the input string.")
