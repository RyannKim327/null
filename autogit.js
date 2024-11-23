from collections import deque

def breadth_first_search(graph, start_node):
    visited = set()
    queue = deque([start_node])
    
    while queue:
        node = queue.popleft()
        if node not in visited:
            print(node)  # Visit the node
            visited.add(node)
            queue.extend([neighbor for neighbor in graph[node] if neighbor not in visited])

# Example graph represented as adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

breadth_first_search(graph, 'A')
