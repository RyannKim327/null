import math

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, math.isqrt(n) + 1):
        if n % i == 0:
            return False
    return True

number = 17
if is_prime(number):
    print(f"{number} is a prime number")
else:
    print(f"{number} is not a prime number")
