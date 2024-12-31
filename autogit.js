def longest_common_prefix(strs):
    if not strs:
        return ""

    strs.sort()
    first_str = strs[0]
    last_str = strs[-1]

    prefix = ""
    for i in range(min(len(first_str), len(last_str))):
        if first_str[i] == last_str[i]:
            prefix += first_str[i]
        else:
            break

    return prefix

# Example usage
strings = ["flower", "flow", "flight"]
print(longest_common_prefix(strings))  # Output: "fl"
