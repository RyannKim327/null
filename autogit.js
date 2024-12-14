# Remove spaces using replace()
string_with_spaces = "Hello, world! This has spaces."
string_without_spaces = string_with_spaces.replace(" ", "")
print(string_without_spaces)
import re

# Remove spaces using regex
string_with_spaces = "Hello, world! This has spaces."
string_without_spaces = re.sub(r'\s+', '', string_with_spaces)
print(string_without_spaces)
