def decimal_to_binary(decimal):
    if decimal < 0:
        return "-" + decimal_to_binary(-decimal)
    elif decimal == 0:
        return "0"
    else:
        return bin(decimal)[2:]

# Test the function
decimal = 10
binary = decimal_to_binary(decimal)
print(f"The binary representation of {decimal} is {binary}")
