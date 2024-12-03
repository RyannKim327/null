def count_word_occurrences(string, word):
    words = string.split()
    count = 0

    for w in words:
        if w == word:
            count += 1

    return count

# Example usage
text = "This is a sample string with some sample words in it."
word_to_count = "sample"
occurrences = count_word_occurrences(text, word_to_count)
print(f"The word '{word_to_count}' occurs {occurrences} times in the text.")
