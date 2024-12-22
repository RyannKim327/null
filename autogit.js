# Define a string with spaces
string_with_spaces = "Hello, world! This is a test string."

# Remove spaces using the replace() method
string_without_spaces = string_with_spaces.replace(" ", "")

print(string_without_spaces)
import re

# Define a string with spaces
string_with_spaces = "Hello, world! This is a test string."

# Remove spaces using regular expression
string_without_spaces = re.sub(r'\s+', '', string_with_spaces)

print(string_without_spaces)
