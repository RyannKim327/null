def remove_vowels(input_string):
    vowels = "aeiouAEIOU"
    output_string = ""
    for char in input_string:
        if char not in vowels:
            output_string += char
    return output_string

# Test the function
input_string = "Hello, World!"
output_string = remove_vowels(input_string)
print(output_string)
