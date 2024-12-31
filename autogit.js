def is_prime(num):
    if num <= 1:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    for i in range(3, int(num**0.5) + 1, 2):
        if num % i == 0:
            return False
    return True

number = 17
if is_prime(number):
    print(f"{number} is a prime number")
else:
    print(f"{number} is not a prime number")
