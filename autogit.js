from collections import defaultdict

def topological_sort_util(node, visited, stack, graph):
    visited[node] = True
    
    for neighbor in graph[node]:
        if not visited[neighbor]:
            topological_sort_util(neighbor, visited, stack, graph)

    stack.append(node)

def topological_sort(graph):
    visited = defaultdict(bool)
    stack = []

    for node in graph:
        if not visited[node]:
            topological_sort_util(node, visited, stack, graph)

    return stack[::-1]

# Example usage
graph = {
    'A': ['B', 'D'],
    'B': ['C'],
    'C': [],
    'D': ['E'],
    'E': ['C']
}

result = topological_sort(graph)
print(result)
