from collections import defaultdict

def topological_sort(graph):
    indegree = {node: 0 for node in graph}
    for node in graph:
        for neighbor in graph[node]:
            indegree[neighbor] += 1
    
    queue = [node for node in indegree if indegree[node] == 0]
    result = []
    
    while queue:
        node = queue.pop(0)
        result.append(node)
        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)
    
    if len(result) != len(graph):
        # Graph has a cycle
        return []
    
    return result

# Example usage
graph = {'A': ['B', 'C'], 'B': ['C'], 'C': ['D'], 'D': []}
print(topological_sort(graph))
