def count_word_occurrences(text, word):
    words = text.split()
    count = 0
    for w in words:
        if w == word:
            count += 1
    return count

text = "This is a sample text with some sample words in it."
word = "sample"
occurrences = count_word_occurrences(text, word)
print(f"The word '{word}' occurs {occurrences} times in the text.")
