from collections import defaultdict

def topological_sort(graph):
    in_degree = defaultdict(int)
    result = []

    # Calculate in-degree for each node
    for node in graph:
        for neighbor in graph[node]:
            in_degree[neighbor] += 1

    # Perform topological sort
    stack = [node for node in graph if in_degree[node] == 0]
    while stack:
        node = stack.pop()
        result.append(node)
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                stack.append(neighbor)

    if len(result) == len(graph):
        return result
    else:
        raise ValueError("Graph has a cycle")

# Example usage
graph = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: [4],
    4: []
}
print(topological_sort(graph))
