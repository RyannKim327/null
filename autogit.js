
import sys

def dijkstra(graph, start):
    shortest_paths = {node: float('inf') for node in graph}
    shortest_paths[start] = 0
    visited = set()
    
    while len(visited) < len(graph):
        node = min((node for node in graph if node not in visited), key=lambda n: shortest_paths[n])
        
        for neighbor, distance in graph[node].items():
            new_path = shortest_paths[node] + distance
            if new_path < shortest_paths[neighbor]:
                shortest_paths[neighbor] = new_path
        
        visited.add(node)
    
    return shortest_paths

# Example usage:
graph = {
    'A': {'B': 5, 'C': 3},
    'B': {'A': 5, 'C': 1, 'D': 2},
    'C': {'A': 3, 'B': 1, 'D': 4},
    'D': {'B': 2, 'C': 4}
}

start_node = 'A'
shortest_paths = dijkstra(graph, start_node)
print(shortest_paths)
