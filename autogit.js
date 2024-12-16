import math

def largest_prime_factor(n):
    largest_prime = 0

    # Remove all factors of 2
    while n % 2 == 0:
        largest_prime = 2
        n = n // 2

    # Check for odd prime factors
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        while n % i == 0:
            largest_prime = i
            n = n // i

    # If the remaining number is a prime number greater than 2
    if n > 2:
        largest_prime = n

    return largest_prime

# Example usage
number = 13195
print(largest_prime_factor(number))
