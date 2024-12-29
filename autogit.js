def count_word_occurrences(string, word):
    words = string.split()
    count = 0
    for w in words:
        if w == word:
            count += 1
    return count

# Test the function
string = "This is a test string. This string is just a test."
word = "is"
count = count_word_occurrences(string, word)
print(f"The word '{word}' occurs {count} times in the string.")
