def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

# Function call to calculate the factorial of 5
result = factorial(5)
print(result)  # Output: 120
