from collections import defaultdict

def topological_sort(graph):
    in_degree = {node: 0 for node in graph}
    for node in graph:
        for neighbor in graph[node]:
            in_degree[neighbor] += 1

    zero_in_degree_nodes = [node for node in graph if in_degree[node] == 0]

    top_order = []
    while zero_in_degree_nodes:
        node = zero_in_degree_nodes.pop()
        top_order.append(node)
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                zero_in_degree_nodes.append(neighbor)

    if len(top_order) == len(graph):
        return top_order
    else:
        return []

# Example of using the topological sort algorithm
graph = {
    'A': ['C'],
    'B': ['C', 'D'],
    'C': ['E'],
    'D': ['F'],
    'E': ['F'],
    'F': []
}

print(topological_sort(graph))
