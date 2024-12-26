def tarjan_scc(graph):
    index_counter = [0]
    stack = []
    stack_set = set()
    index = {}
    lowlink = {}
    result = []

    def strongconnect(node):
        index[node] = index_counter[0]
        lowlink[node] = index_counter[0]
        index_counter[0] += 1
        stack.append(node)
        stack_set.add(node)

        for neighbor in graph.get(node, []):
            if neighbor not in index:
                strongconnect(neighbor)
                lowlink[node] = min(lowlink[node], lowlink[neighbor])
            elif neighbor in stack_set:
                lowlink[node] = min(lowlink[node], index[neighbor])

        if lowlink[node] == index[node]:
            component = []
            while True:
                neighbor = stack.pop()
                stack_set.remove(neighbor)
                component.append(neighbor)
                if neighbor == node:
                    break
            result.append(component)

    for node in graph:
        if node not in index:
            strongconnect(node)
    
    return result

# Example graph
graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [3, 5],
    5: [6],
    6: [4, 7],
    7: [8],
    8: [7, 9],
    9: [6, 10],
    10: [9]
}

print(tarjan_scc(graph))
