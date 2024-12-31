def find_string_length(s):
    count = 0
    for char in s:
        count += 1
    return count

# Example usage
string = "Hello, World!"
length = find_string_length(string)
print("Length of the string:", length)
