def reverse_words_order(input_string):
    words = input_string.split()
    reversed_string = ' '.join(reversed(words))
    return reversed_string

input_string = "Hello World, this is a test"
reversed_string = reverse_words_order(input_string)
print(reversed_string)
