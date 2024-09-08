1. Initialize an empty hash map (dictionary) to store the frequency of each character.
2. Iterate through the characters of the string and update the frequency count in the hash map.
3. Iterate through the characters of the string again and check the frequency count in the hash map. 
4. Return the first character with a frequency of 1.
def first_non_repeating_char(input_string):
    char_freq = {}
    
    for char in input_string:
        if char in char_freq:
            char_freq[char] += 1
        else:
            char_freq[char] = 1
    
    for char in input_string:
        if char_freq[char] == 1:
            return char
    
    return None

# Test the function
input_string = "hello"
result = first_non_repeating_char(input_string)

if result:
    print(f"The first non-repeating character in the string '{input_string}' is '{result}'.")
else:
    print("No non-repeating character found.")
