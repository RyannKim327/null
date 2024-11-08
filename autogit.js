s = "Hello, World!"
s_without_spaces = s.replace(" ", "")
print(s_without_spaces)
import re
s = "Hello, World!"
s_without_spaces = re.sub(r'\s+', '', s)
print(s_without_spaces)
