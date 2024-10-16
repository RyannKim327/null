def reverse_words_in_string(input_string):
    words = input_string.split()  # Split the string into words
    reversed_words = ' '.join(reversed(words))  # Reverse the list of words and join them back together
    return reversed_words

# Example
input_string = "Hello world, how are you?"
reversed_string = reverse_words_in_string(input_string)
print(reversed_string)  # Output: "you? are how world, Hello"
