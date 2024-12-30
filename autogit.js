def longest_common_prefix(strings):
    if not strings:
        return ""

    min_len = min(len(s) for s in strings)
    prefix = ""
    
    for i in range(min_len):  
        char = strings[0][i]
        
        if all(s[i] == char for s in strings):
            prefix += char
        else:
            break
            
    return prefix

# Example usage:
strings = ["flower", "flow", "flight"]
print(longest_common_prefix(strings))  # Output: "fl"
