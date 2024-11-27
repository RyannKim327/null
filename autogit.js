def find_string_length(input_str):
    count = 0
    for char in input_str:
        count += 1
    return count

input_str = "Hello, World!"
length = find_string_length(input_str)
print("Length of the string is:", length)
