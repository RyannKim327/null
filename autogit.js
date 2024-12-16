function largestPrimeFactor(number):
    maxPrime = -1
    
    while number % 2 == 0:
        maxPrime = 2
        number = number / 2
    
    for i from 3 to sqrt(number) step 2:
        while number % i == 0:
            maxPrime = i
            number = number / i
    
    if number > 2:
        maxPrime = number

    return maxPrime

number = 13195
print("The largest prime factor of", number, "is", largestPrimeFactor(number))
