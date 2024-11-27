function longestCommonPrefix(strings):
    if length(strings) == 0:
        return ""

    prefix = strings[0]

    for string in strings[1:]:
        i = 0
        while i < min(len(prefix), len(string)) and prefix[i] == string[i]:
            i += 1
        prefix = prefix[:i]

        if prefix == "":
            break

    return prefix
