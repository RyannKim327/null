import math

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

def find_factors(n):
    factors = []
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            factors.append(i)
            factors.append(n // i)
    return factors

def find_largest_prime_factor(n):
    factors = find_factors(n)
    prime_factors = [factor for factor in factors if is_prime(factor)]
    largest_prime_factor = max(prime_factors)
    return largest_prime_factor

number = 1234567890
largest_prime_factor = find_largest_prime_factor(number)
print(f"The largest prime factor of {number} is {largest_prime_factor}")
