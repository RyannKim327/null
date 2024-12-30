def longest_common_prefix(strings):
    if not strings:
        return ""
    
    prefix = strings[0]
    
    for i in range(1, len(strings)):
        while strings[i].find(prefix) != 0:
            prefix = prefix[:-1]
            if not prefix:
                return ""
    
    return prefix

# Example
strings = ["flower", "flow", "flight"]
print(longest_common_prefix(strings))  # Output: "fl"
