def calculate_string_length(string):
    count = 0
    for char in string:
        count += 1
    return count

# Example usage
my_string = "Hello, World!"
length = calculate_string_length(my_string)
print(length)  # Output will be 13
