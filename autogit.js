my_string = "Hello, World"
new_string = my_string.replace(" ", "")
print(new_string)
import re

my_string = "Hello, World"
new_string = re.sub(r'\s+', '', my_string)
print(new_string)
