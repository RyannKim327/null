Initialize:
    max_so_far = 0
    max_ending_here = 0

Loop for each element in the array:
    max_ending_here = max_ending_here + array[i]
    
    if max_ending_here < 0:
        max_ending_here = 0
    
    if max_so_far < max_ending_here:
        max_so_far = max_ending_here

Return max_so_far
