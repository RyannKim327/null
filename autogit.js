def bellman_ford(graph, source):
    distance = {node: float('inf') for node in graph}
    predecessor = {node: None for node in graph}
    distance[source] = 0
    
    for _ in range(len(graph) - 1):
        for node in graph:
            for neighbor in graph[node]:
                if distance[node] + graph[node][neighbor] < distance[neighbor]:
                    distance[neighbor] = distance[node] + graph[node][neighbor]
                    predecessor[neighbor] = node
                    
    for node in graph:
        for neighbor in graph[node]:
            if distance[node] + graph[node][neighbor] < distance[neighbor]:
                print("Graph contains negative cycle")
                return
    
    return distance, predecessor

graph = {
    'A': {'B': -1, 'C': 4},
    'B': {'C': 3, 'D': 2, 'E': 2},
    'C': {},
    'D': {'B': 1, 'C': 5},
    'E': {'D': -3}
}

source_node = 'A'
shortest_distances, predecessors = bellman_ford(graph, source_node)
print("Shortest distances:", shortest_distances)
print("Predecessors:", predecessors)
