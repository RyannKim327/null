# Replace spaces with an empty string
new_string = your_string.replace(" ", "")
import re

# Use regular expression to remove all whitespace characters
new_string = re.sub(r"\s", "", your_string)
