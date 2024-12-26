def remove_vowels(text):
    vowels = "aeiouAEIOU"
    result = ""
    for char in text:
        if char not in vowels:
            result += char
    return result

# Example
text = "Hello, World!"
print(remove_vowels(text))  # Output: "Hll, Wrld!"
