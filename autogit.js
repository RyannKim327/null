def first_repeated_char(input_string):
    seen_chars = set()
    
    for char in input_string:
        if char in seen_chars:
            return char
        seen_chars.add(char)
    
    return None

# Example Usage
input_str = "hello world"
result = first_repeated_char(input_str)
print("First repeated character:", result)
