# Define the string and the word you want to count
string = "This is a sample string with some sample words in it."
word = "sample"

# Split the string into individual words
words_list = string.split()

# Initialize a counter variable to store the count
count = 0

# Loop through the words in the list and check if each word matches the target word
for w in words_list:
    if w == word:
        count += 1

# Print the count of occurrences of the word
print("The word '{}' appears {} times in the string.".format(word, count))
