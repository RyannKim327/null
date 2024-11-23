def count_word_occurrences(sentence, word):
    words = sentence.split()
    count = 0

    for w in words:
        if w == word:
            count += 1

    return count

# Example usage
sentence = "Hello world, hello sun, hello moon!"
word = "hello"
result = count_word_occurrences(sentence.lower(), word.lower())

print(f"The word '{word}' occurs {result} times in the sentence.")
