# Convert a string to an integer
string_number = "42"
integer_number = int(string_number)

print(integer_number)  # Output: 42
string_number = "42.5"

try:
    integer_number = int(string_number)
    print(integer_number)
except ValueError:
    print("Conversion failed. The string is not a valid integer.")
