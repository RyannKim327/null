def remove_vowels(input_str):
    vowels = "AEIOUaeiou"
    return "".join(char for char in input_str if char not in vowels)

# Example usage
input_str = "Hello, World!"
output_str = remove_vowels(input_str)
print(output_str)  # Output: "Hll, Wrld!"
