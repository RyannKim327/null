# Function to count occurrences of a word in a string
def count_word_occurrences(input_string, target_word):
    words = input_string.split()
    count = 0
    for word in words:
        if word == target_word:
            count += 1
    return count

# Test the function
input_string = "apple banana apple orange apple"
target_word = "apple"
occurrences = count_word_occurrences(input_string, target_word)
print("Number of occurrences of '" + target_word + "':", occurrences)
