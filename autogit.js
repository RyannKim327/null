def largest_prime_factor(n):
    i = 2
    while i * i <= n:
        if n % i:
            i += 1
        else:
            n //= i
    return n

num = __your_number__
result = largest_prime_factor(num)
print("The largest prime factor of", num, "is:", result)
