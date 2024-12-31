def count_word_occurrences(text, word):
    words = text.split()
    count = 0
    for w in words:
        if w == word:
            count += 1
    return count

text = "apple banana orange apple mango apple"
word = "apple"
occurrences = count_word_occurrences(text, word)
print(f"The word '{word}' appears {occurrences} times in the text.")
