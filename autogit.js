from collections import defaultdict

def first_non_repeating_char(input_string):
    char_count = defaultdict(int)
    
    # Count the frequency of each character
    for char in input_string:
        char_count[char] += 1
    
    # Find the first non-repeating character
    for char in input_string:
        if char_count[char] == 1:
            return char
    
    return None

# Test the function
input_string = "hello world"
result = first_non_repeating_char(input_string)
if result:
    print(f"The first non-repeating character is: {result}")
else:
    print("No non-repeating character found.")
