string = "Hello, World!"
substring = "World"

if substring in string:
    print("Substring found in the string.")
else:
    print("Substring not found in the string.")
string = "Hello, World!"
substring = "World"

if string.find(substring) != -1:
    print("Substring found in the string.")
else:
    print("Substring not found in the string.")
