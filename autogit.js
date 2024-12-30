# Method 1: Using replace() function
text = "  Hello,   World!  "
cleaned_text = text.replace(" ", "")
print(cleaned_text)
import re

# Method 2: Using Regular Expressions
text = "  Hello,   World!  "
cleaned_text = re.sub(r'\s+', '', text)
print(cleaned_text)
