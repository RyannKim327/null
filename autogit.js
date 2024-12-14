def remove_vowels(input_string):
    vowels = "aeiouAEIOU"
    output_string = ""
    for char in input_string:
        if char not in vowels:
            output_string += char
    return output_string

# Example usage
input_string = "Hello, World!"
result = remove_vowels(input_string)
print(result)
