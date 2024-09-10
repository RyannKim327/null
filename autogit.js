from collections import defaultdict

def topological_sort(graph):
    def dfs(node, visited, result):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor, visited, result)
        result.append(node)

    visited = set()
    result = []
    for node in graph:
        if node not in visited:
            dfs(node, visited, result)

    result.reverse()
    return result

# Example usage
graph = {
    'A': ['C'],
    'B': ['C'],
    'C': ['D'],
    'D': ['E'],
    'E': []
}

print(topological_sort(graph))
