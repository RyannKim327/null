import math

number = 5
factorial = math.factorial(number)
print(f'The factorial of {number} is: {factorial}')
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

number = 5
result = factorial(number)
print(f'The factorial of {number} is: {result}')
