# Removing whitespace from the beginning and end of a string
my_string = "  Hello, World!  "
trimmed_string = my_string.strip()
print(trimmed_string)
Hello, World!
# Removing all whitespace from a string
my_string = "  Hello,     World!  "
clean_string = my_string.replace(" ", "")
print(clean_string)
Hello,World!
