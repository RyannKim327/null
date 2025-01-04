def reverse_words_in_string(input_string):
    # split the string into words
    words = input_string.split()

    # reverse the order of words
    reversed_words = words[::-1]

    # join the words back together
    reversed_string = ' '.join(reversed_words)

    return reversed_string

# Example usage
input_string = "Hello World Welcome"
reversed_string = reverse_words_in_string(input_string)
print(reversed_string)
