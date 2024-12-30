from collections import defaultdict

def topologicalSortUtil(node, visited, stack, graph):
    visited[node] = True
    
    for neighbor in graph[node]:
        if not visited[neighbor]:
            topologicalSortUtil(neighbor, visited, stack, graph)
    
    stack.append(node)

def topologicalSort(graph):
    visited = {node: False for node in graph}
    stack = []
    
    for node in graph:
        if not visited[node]:
            topologicalSortUtil(node, visited, stack, graph)
    
    stack.reverse()
    return stack

# Example graph represented as an adjacency list
graph = {
    'A': ['C'],
    'B': ['C', 'D'],
    'C': ['E'],
    'D': ['F'],
    'E': [],
    'F': []
}

print(topologicalSort(graph))
