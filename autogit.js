import random

# Define the range for the random number
start_range = 1
end_range = 100

# Generate a random number within the specified range
random_number = random.randint(start_range, end_range)

print("Random number within the range [{}, {}]: {}".format(start_range, end_range, random_number))
