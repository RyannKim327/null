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

# Example graph for testing the algorithm
graph = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: [4],
    4: []
}

topologically_sorted = topologicalSort(graph)
print("Topological sort result:", topologically_sorted)
