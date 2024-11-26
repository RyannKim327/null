def largest_prime_factor(n):
    i = 2
    while i * i <= n:
        if n % i:
            i += 1
        else:
            n //= i
    return n

number = 1234567890  # Enter the number for which you want to find the largest prime factor
result = largest_prime_factor(number)
print(result)
