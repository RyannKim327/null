def remove_vowels(input_string):
    vowels = "AEIOUaeiou"
    return "".join([letter for letter in input_string if letter not in vowels])

input_string = "Hello, World!"
output_string = remove_vowels(input_string)
print(output_string)
