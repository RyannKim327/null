import math

def largest_prime_factor(n):
    largest_prime = 2
    
    while n > largest_prime:
        if n % largest_prime == 0:
            n //= largest_prime
        else:
            largest_prime += 1
    
    return largest_prime

number = 56
result = largest_prime_factor(number)
print(f"The largest prime factor of {number} is: {result}")
