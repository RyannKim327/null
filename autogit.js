def depth_first_search(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            depth_first_search(graph, neighbor, visited)
    
    return visited

# Example graph representation as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

start_node = 'A'
visited_nodes = depth_first_search(graph, start_node)
print("Nodes visited in DFS order:", visited_nodes)
