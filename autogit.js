# Replace whitespace characters with an empty string
my_string = "  Hello,  World!  "
new_string = my_string.replace(" ", "")
print(new_string)
import re

# Using regular expression to remove whitespace
my_string = "  Hello,  World!  "
new_string = re.sub(r'\s+', '', my_string)
print(new_string)
