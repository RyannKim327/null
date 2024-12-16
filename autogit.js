def find_string_length(input_string):
    length = 0
    for char in input_string:
        length += 1
    return length

# Example usage
input_str = "Hello, World!"
print("Length of the string:", find_string_length(input_str))
