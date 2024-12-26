import math

def is_prime(number):
    if number <= 1:
        return False
    if number == 2:
        return True
    if number % 2 == 0:
        return False
    
    max_divisor = math.isqrt(number) + 1
    for i in range(3, max_divisor, 2):
        if number % i == 0:
            return False
    return True

# Test the function
number = 17
if is_prime(number):
    print(f"{number} is a prime number")
else:
    print(f"{number} is not a prime number")
