def tarjans_algorithm(graph):
    index = 0
    stack = []
    indices = {}
    low_links = {}
    result = []

    def dfs(node):
        nonlocal index
        indices[node] = index
        low_links[node] = index
        index += 1
        stack.append(node)

        for neighbor in graph[node]:
            if neighbor not in indices:
                dfs(neighbor)
                low_links[node] = min(low_links[node], low_links[neighbor])
            elif neighbor in stack:
                low_links[node] = min(low_links[node], indices[neighbor])

        if indices[node] == low_links[node]:
            component = []
            while True:
                top = stack.pop()
                component.append(top)
                if top == node:
                    break
            result.append(component)

    for node in graph:
        if node not in indices:
            dfs(node)

    return result
