
# Function to convert decimal to binary
def decimal_to_binary(decimal_num):
    return bin(decimal_num)

# Taking input from user
decimal_num = int(input("Enter a decimal number: "))

# Calling the function to convert decimal to binary
binary_num = decimal_to_binary(decimal_num)

# Displaying the binary equivalent
print(f"The binary equivalent of {decimal_num} is: {binary_num}")
