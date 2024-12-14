str_with_whitespace = "  Hello, World!  "
str_without_whitespace = str_with_whitespace.replace(" ", "")
print(str_without_whitespace)
import re
str_with_whitespace = "  Hello, World!  "
str_without_whitespace = re.sub(r"\s+", "", str_with_whitespace)
print(str_without_whitespace)
