def reverse_words_in_string(input_string):
    words = input_string.split()
    reversed_words = words[::-1]
    reversed_string = ' '.join(reversed_words)
    return reversed_string

# Example usage
input_string = "Hello, world! This is a test."
reversed_string = reverse_words_in_string(input_string)
print(reversed_string)
