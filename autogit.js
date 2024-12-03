def largest_prime_factor(num):
    largest_factor = 1
    i = 2
    while i <= num:
        if num % i == 0:
            num = num // i
            largest_factor = i
        else:
            i += 1
    return largest_factor

num = 13195  # Insert the number for which you want to find the largest prime factor
result = largest_prime_factor(num)
print("The largest prime factor of {} is: {}".format(num, result))
