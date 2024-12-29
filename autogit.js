# Remove spaces using the replace() method
string_with_spaces = "Hello, world!"
string_without_spaces = string_with_spaces.replace(" ", "")
print(string_without_spaces)
import re

# Remove spaces using regular expression
string_with_spaces = "Hello, world!"
string_without_spaces = re.sub(r'\s+', '', string_with_spaces)
print(string_without_spaces)
