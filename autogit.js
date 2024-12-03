def count_word_occurrences(input_string, word):
    count = 0
    words = input_string.split()
    
    for w in words:
        if w == word:
            count += 1

    return count

input_string = "hello world hello"
word = "hello"

result = count_word_occurrences(input_string, word)
print(f'The word "{word}" occurs {result} times in the input string.')
