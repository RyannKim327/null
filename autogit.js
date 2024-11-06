def largest_prime_factor(n):
    i = 2
    while i * i <= n:
        if n % i:
            i += 1
        else:
            n //= i
    return n
    
number = 123456789
largest_prime = largest_prime_factor(number)
print("Largest prime factor of", number, "is:", largest_prime)
