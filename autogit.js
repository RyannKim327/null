def remove_vowels(input_string):
    vowels = "aeiouAEIOU"
    result = ""
    
    for char in input_string:
        if char not in vowels:
            result += char
    
    return result

# Test the function
input_string = "Hello, World!"
result = remove_vowels(input_string)
print(result)
