def remove_vowels(input_string):
    vowels = "aeiouAEIOU"
    output_string = "".join([char for char in input_string if char not in vowels])
    return output_string

input_string = "Hello, World!"
result = remove_vowels(input_string)
print(result)
