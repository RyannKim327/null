import re

input_string = "Hello, World! This is a test string."
output_string = re.sub(r'\s+', '', input_string)

print(output_string)
