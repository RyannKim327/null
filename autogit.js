def decimal_to_binary(n):
    return bin(n).replace("0b", "")

decimal_number = 27
binary_number = decimal_to_binary(decimal_number)
print(f"The binary representation of {decimal_number} is: {binary_number}")
