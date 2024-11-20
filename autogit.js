def tarjan(graph):
    index_counter = [0]
    stack = []
    lowlinks = {}
    index = {}
    result = []

    def strongconnect(node):
        index[node] = index_counter[0]
        lowlinks[node] = index_counter[0]
        index_counter[0] += 1
        stack.append(node)

        for neighbor in graph[node]:
            if neighbor not in index:
                strongconnect(neighbor)
                lowlinks[node] = min(lowlinks[node], lowlinks[neighbor])
            elif neighbor in stack:
                lowlinks[node] = min(lowlinks[node], index[neighbor])

        if lowlinks[node] == index[node]:
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

# Example of using Tarjan's algorithm on a graph represented as an adjacency list
graph = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A', 'D'],
    'D': ['E'],
    'E': ['F'],
    'F': ['D']
}

print(tarjan(graph))
