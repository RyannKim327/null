def count_word_occurrences(text, word):
    # Split the string into words
    words = text.split()
    
    # Initialize a counter for the word occurrences
    count = 0
    
    # Iterate over the words and count occurrences
    for w in words:
        if w == word:
            count += 1
    
    return count

# Example usage
text = "hello world hello"
word = "hello"
count = count_word_occurrences(text, word)
print(count)  # Output: 2
