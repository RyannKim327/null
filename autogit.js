def largest_prime_factor(n):
    largest_factor = 1

    while n % 2 == 0:
        largest_factor = 2
        n = n // 2

    for i in range(3, int(n**0.5) + 1, 2):
        while n % i == 0:
            largest_factor = i
            n = n // i

    if n > 2:
        largest_factor = n

    return largest_factor

number = 56
result = largest_prime_factor(number)
print("Largest prime factor of", number, "is:", result)
