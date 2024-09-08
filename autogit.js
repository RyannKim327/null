def reverse_words_order(sentence):
    words = sentence.split()
    reversed_sentence = ' '.join(reversed(words))
    return reversed_sentence

# Example
input_sentence = "Hello world how are you"
reversed_sentence = reverse_words_order(input_sentence)
print(reversed_sentence)
