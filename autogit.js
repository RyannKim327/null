def reverse_string(input_string):
    reversed_string = ""
    for i in range(len(input_string) - 1, -1, -1):
        reversed_string += input_string[i]
    return reversed_string

# Test the function
input_string = "Hello, World!"
reversed_string = reverse_string(input_string)
print(reversed_string)
