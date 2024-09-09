from collections import defaultdict

def topological_sort(graph):
    in_degree = {node: 0 for node in graph}
    for node in graph:
        for neighbor in graph[node]:
            in_degree[neighbor] += 1
    
    queue = [node for node in in_degree if in_degree[node] == 0]
    result = []
    
    while queue:
        node = queue.pop(0)
        result.append(node)
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    if len(result) == len(graph):
        return result
    else:
        print("Graph has a cycle")

# Example usage:
graph = {
    'A': ['C', 'B'],
    'B': ['C', 'D'],
    'C': ['E'],
    'D': ['E'],
    'E': []
}

print(topological_sort(graph))
