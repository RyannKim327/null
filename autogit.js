import math

n = 5
factorial = math.factorial(n)

print("Factorial of", n, "is", factorial)
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

n = 5
result = factorial(n)

print("Factorial of", n, "is", result)
