decimal_number = 42
binary_number = bin(decimal_number)[2:]  # Indexing [2:] removes the '0b' prefix from the binary representation

print(f"The binary representation of {decimal_number} is: {binary_number}")
