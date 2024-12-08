def find_string_length(input_string):
    count = 0
    for char in input_string:
        count += 1
    return count

input_string = "Hello, World!"
print("Length of the string:", find_string_length(input_string))
