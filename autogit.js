# Function to check if a number is prime
def is_prime(number):
    if number <= 1:
        return False
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    return True

# Test the function
number = 17  # Enter the number you want to check for primality
if is_prime(number):
    print(f"{number} is a prime number")
else:
    print(f"{number} is not a prime number")
