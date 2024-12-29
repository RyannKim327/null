# Method 1: Using the replace() function
string_with_whitespace = "  Hello   World  "
string_without_whitespace = string_with_whitespace.replace(" ", "")
print(string_without_whitespace)
import re

string_with_whitespace = "  Hello   World  "
string_without_whitespace = re.sub(r'\s+', '', string_with_whitespace)
print(string_without_whitespace)
