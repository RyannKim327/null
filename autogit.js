import math

def is_prime(number):
    if number < 2:
        return False
    for i in range(2, int(math.sqrt(number)) + 1):
        if number % i == 0:
            return False
    return True

number = 23

if is_prime(number):
    print(number, "is a prime number")
else:
    print(number, "is not a prime number")
