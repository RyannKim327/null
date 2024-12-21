def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

num = 13  # change this to the number you want to check
if is_prime(num):
    print(f"{num} is a prime number")
else:
    print(f"{num} is not a prime number")
