from collections import deque

def bfs(graph, start, goal):
    queue = deque()
    queue.append(start)
    visited = set()
    
    while queue:
        node = queue.popleft()
        if node == goal:
            return True
        
        if node not in visited:
            visited.add(node)
            neighbors = graph[node]
            for neighbor in neighbors:
                if neighbor not in visited:
                    queue.append(neighbor)
                    
    return False

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

start_node = 'A'
goal_node = 'F'

if bfs(graph, start_node, goal_node):
    print("Path found from {} to {}: {}".format(start_node, goal_node, "Yes"))
else:
    print("No path found from {} to {}".format(start_node, goal_node))
