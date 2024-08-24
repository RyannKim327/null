def largest_prime_factor(n):
    i = 2
    while i * i <= n:
        if n % i:
            i += 1
        else:
            n //= i
    return n

number = 56
print(f"The largest prime factor of {number} is: {largest_prime_factor(number)}")
