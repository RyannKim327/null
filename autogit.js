def largest_prime_factor(n):
    i = 2
    while i * i <= n:
        if n % i:
            i += 1
        else:
            n //= i
    return n

number = 56
largest_prime = largest_prime_factor(number)

print("The largest prime factor of", number, "is", largest_prime)
