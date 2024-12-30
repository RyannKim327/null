def find_string_length(input_string):
    count = 0
    for char in input_string:
        count += 1
    return count

# Test the function
input_string = "Hello, World!"
length = find_string_length(input_string)
print("Length of the string:", length)
