def longest_common_prefix(strs):
    if not strs:
        return ""
    
    # Sort the strings to make it easier to find the common prefix
    strs.sort()
    
    # Compare the first and last strings in the sorted set
    first_str = strs[0]
    last_str = strs[-1]
    
    # Find the common prefix between the first and last strings
    i = 0
    while i < len(first_str) and i < len(last_str) and first_str[i] == last_str[i]:
        i += 1
    
    return first_str[:i]

# Example usage
strings = ["flower", "flow", "flight"]
print(longest_common_prefix(strings))  # Output: "fl"
