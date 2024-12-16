def find_length(input_string):
    length = 0
    for char in input_string:
        length += 1
    return length

input_string = "Hello, World!"
length = find_length(input_string)
print("Length of the string:", length)
