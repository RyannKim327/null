def largest_prime_factor(n):
    i = 2
    while i * i <= n:
        if n % i:
            i += 1
        else:
            n //= i
    return n

number = 315
result = largest_prime_factor(number)
print("The largest prime factor of", number, "is:", result)
