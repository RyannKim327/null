def reverse_words_order(input_string):
    words = input_string.split()
    reversed_words = words[::-1]
    reversed_string = ' '.join(reversed_words)
    return reversed_string

input_string = "Hello World How are you"
reversed_string = reverse_words_order(input_string)
print(reversed_string)
