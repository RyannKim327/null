def first_non_repeating_char(s):
    char_count = {}
    
    # Count the frequency of each character
    for char in s:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
            
    # Find the first non-repeating character
    for char in s:
        if char_count[char] == 1:
            return char
    
    return None

# Test the function
string = "hello world"
result = first_non_repeating_char(string)
if result:
    print("The first non-repeating character is:", result)
else:
    print("No non-repeating characters found in the string.")
