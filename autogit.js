def reverse_words(sentence):
    words = sentence.split()
    reversed_sentence = ' '.join(reversed(words))
    return reversed_sentence

# Example usage
sentence = "Hello world! This is a string."
reversed_sentence = reverse_words(sentence)
print(reversed_sentence)
