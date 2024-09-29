def reverse_words_order(s):
    words = s.split()
    reversed_words = words[::-1]
    reversed_string = ' '.join(reversed_words)
    return reversed_string

# Test the function
input_string = "Hello, World! How are you?"
reversed_string = reverse_words_order(input_string)
print(reversed_string)
