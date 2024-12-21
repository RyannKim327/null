def find_string_length(string):
    count = 0
    for char in string:
        count += 1
    return count

# Test the function
string = "Hello, World!"
print(find_string_length(string))  # Output: 13
