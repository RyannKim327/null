def count_occurrences(text, word):
    return text.lower().count(word.lower())

text = "This is a sample text with sample words in it. Sample"
word = "sample"

occurrences = count_occurrences(text, word)
print(f"The word '{word}' occurs {occurrences} times in the text.")
