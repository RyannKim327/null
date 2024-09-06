sentence = "This is a sentence with a word. The word will be counted here."
word_to_count = "word"

count = sentence.lower().count(word_to_count)

print(f"The word '{word_to_count}' appears {count} times in the sentence.")
