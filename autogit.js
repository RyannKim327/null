def remove_vowels(input_string):
    vowels = "aeiouAEIOU"
    return "".join(char for char in input_string if char not in vowels)

input_string = "Hello, World!"
output_string = remove_vowels(input_string)
print(output_string)
