def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

# Test the function
number = 5
result = factorial(number)
print(f"The factorial of {number} is {result}")
