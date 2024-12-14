import sys

def dijkstra(graph, source):
    nodes = set(graph.keys())
    dist = {node: float('inf') for node in nodes}
    dist[source] = 0
    
    while nodes:
        min_node = min(nodes, key=lambda x: dist[x])
        nodes.remove(min_node)
        
        for neighbor in graph[min_node]:
            new_dist = dist[min_node] + graph[min_node][neighbor]
            if new_dist < dist[neighbor]:
                dist[neighbor] = new_dist
    
    return dist

# Example graph
graph = {
    'A': {'B': 5, 'C': 3},
    'B': {'A': 5, 'C': 2, 'D': 1},
    'C': {'A': 3, 'B': 2, 'D': 4},
    'D': {'B': 1, 'C': 4}
}

source = 'A'
shortest_paths = dijkstra(graph, source)

for node in shortest_paths:
    print(f'Shortest path from {source} to {node}: {shortest_paths[node]}')
