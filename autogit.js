# Method 1: Using replace() function
original_string = "  Hello,     World!  "
stripped_string = original_string.replace(" ", "")
print(stripped_string)
# Method 2: Using regular expression
import re
original_string = "  Hello,     World!  "
stripped_string = re.sub(r'\s+', '', original_string)
print(stripped_string)
