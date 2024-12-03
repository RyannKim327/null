def largest_prime_factor(number):
    i = 2
    while i * i <= number:
        if number % i:
            i += 1
        else:
            number //= i
    return number

number = 56
largest_prime_factor = largest_prime_factor(number)
print(f"The largest prime factor of {number} is {largest_prime_factor}")
