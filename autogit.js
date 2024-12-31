from collections import defaultdict

def topological_sort(graph):
    in_degree = {node: 0 for node in graph}
    for node in graph:
        for neighbor in graph[node]:
            in_degree[neighbor] += 1

    queue = [node for node in graph if in_degree[node] == 0]
    result = []

    while queue:
        node = queue.pop(0)
        result.append(node)
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    if len(result) != len(graph):
        raise ValueError("The graph contains a cycle")

    return result

# Example graph
graph = {
    1: [2, 3],
    2: [3, 4],
    3: [5],
    4: [5],
    5: []
}

sorted_nodes = topological_sort(graph)
print(sorted_nodes)
