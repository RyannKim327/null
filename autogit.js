def tarjan_strongly_connected_components(graph):
    index_counter = [0]
    stack = []
    low_links = {}
    index = {}
    result = []

    def strongconnect(node):
        index[node] = index_counter[0]
        low_links[node] = index_counter[0]
        index_counter[0] += 1
        stack.append(node)

        for neighbor in graph[node]:
            if neighbor not in index:
                strongconnect(neighbor)
                low_links[node] = min(low_links[node], low_links[neighbor])
            elif neighbor in stack:
                low_links[node] = min(low_links[node], index[neighbor])

        if low_links[node] == index[node]:
            component = []
            while True:
                neighbor = stack.pop()
                component.append(neighbor)
                if neighbor == node:
                    break
            result.append(component)

    for node in graph:
        if node not in index:
            strongconnect(node)

    return result

# Example usage
graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [0, 5],
    5: [3]
}

print(tarjan_strongly_connected_components(graph))
