def count_occurrences(word, string):
    word_list = string.split()
    count = 0
    for w in word_list:
        if w == word:
            count += 1
    return count

# Test the function
word = "apple"
string = "apple orange banana apple grape apple"
result = count_occurrences(word, string)
print(f"The word '{word}' appears {result} times in the string.")
