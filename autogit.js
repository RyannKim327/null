def remove_vowels(input_str):
    vowels = "aeiouAEIOU"
    return ''.join([char for char in input_str if char not in vowels])

input_str = "Hello, World!"
result = remove_vowels(input_str)
print(result)
