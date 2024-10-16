def reverse_words_order(sentence):
    words = sentence.split()
    reverse_sentence = ' '.join(reversed(words))
    return reverse_sentence

# Example usage
sentence = "Hello, how are you?"
reversed_sentence = reverse_words_order(sentence)
print(reversed_sentence)
