import math

# Calculate the factorial of a number
num = 5
factorial = math.factorial(num)

print(f'The factorial of {num} is: {factorial}')
# Custom function to calculate the factorial of a number
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

num = 5
result = factorial(num)

print(f'The factorial of {num} is: {result}')
