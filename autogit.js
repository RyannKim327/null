def reverse_words(string):
    words = string.split()
    reversed_words = " ".join(reversed(words))
    return reversed_words

# Example usage
input_string = "Hello World, how are you?"
reversed_string = reverse_words(input_string)
print(reversed_string)  # Output: "you? are how World, Hello"
