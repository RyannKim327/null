from collections import Counter

def first_non_repeating_char(s):
    char_count = Counter(s)
    for char in s:
        if char_count[char] == 1:
            return char
    return None

# Example
input_string = "hello world"
result = first_non_repeating_char(input_string)
print("First non-repeating character:", result)
