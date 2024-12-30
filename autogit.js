function isArraySortedAscending(array):
    for i from 0 to length(array) - 2 do:
        if array[i] > array[i+1] then:
            return false
    end for
    return true
end function
