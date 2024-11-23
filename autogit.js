# Define the string
my_string = "Hello, world! Hello, Python! Hello, programming!"

# Define the word to count
word_to_count = "Hello"

# Count the number of occurrences of the word in the string
count = my_string.count(word_to_count)

print("Number of occurrences of '", word_to_count, "':", count)
import re

# Define the string
my_string = "Hello, world! Hello, Python! Hello, programming!"

# Define the word to count
word_to_count = "Hello"

# Count the number of occurrences of the word in the string using regular expressions
count = len(re.findall(r'\b%s\b' % word_to_count, my_string))

print("Number of occurrences of '", word_to_count, "':", count)
