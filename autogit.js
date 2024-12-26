def is_prime(num):
    if num <= 1:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    max_divisor = int(num ** 0.5) + 1
    for i in range(3, max_divisor, 2):
        if num % i == 0:
            return False
    return True

num = 17
if is_prime(num):
    print(f"{num} is a prime number")
else:
    print(f"{num} is not a prime number")
