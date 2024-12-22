def tarjan_scc(graph):

    def dfs(node):
        nonlocal index, stack, lowlink, on_stack

        index += 1
        lowlink[node] = index
        stack.append(node)
        on_stack.add(node)

        for neighbor in graph[node]:
            if lowlink[neighbor] == -1:
                dfs(neighbor)
                lowlink[node] = min(lowlink[node], lowlink[neighbor])
            elif neighbor in on_stack:
                lowlink[node] = min(lowlink[node], lowlink[neighbor])

        if lowlink[node] == index:
            scc = []
            while True:
                neighbor = stack.pop()
                on_stack.remove(neighbor)
                scc.append(neighbor)
                if neighbor == node:
                    break
            strongly_connected_components.append(scc)

    index = -1
    stack = []
    lowlink = [-1] * len(graph)
    on_stack = set()
    strongly_connected_components = []

    for node in range(len(graph)):
        if lowlink[node] == -1:
            dfs(node)

    return strongly_connected_components

# Example graph represented as adjacency list
graph = {
    0: [1],
    1: [2],
    2: [3],
    3: [0, 4],
    4: [5],
    5: [6],
    6: [4, 7],
    7: [8],
    8: [9],
    9: [6]
}

sccs = tarjan_scc(graph)
print(sccs)
