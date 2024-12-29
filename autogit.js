def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

number = 5
factorial_of_number = factorial(number)
print(f"The factorial of {number} is {factorial_of_number}")
import math

number = 5
factorial_of_number = math.factorial(number)
print(f"The factorial of {number} is {factorial_of_number}")
