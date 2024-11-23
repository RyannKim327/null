from collections import deque

def breadth_limited_search(graph, start, goal, limit):
    queue = deque([(start, [start])])

    while queue:
        node, path = queue.popleft()
        
        if node == goal:
            return path
        
        if len(path) < limit:
            for neighbor in graph[node]:
                if neighbor not in path:
                    queue.append((neighbor, path + [neighbor]))
    
    return None

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

start_node = 'A'
goal_node = 'F'
limit = 3

result = breadth_limited_search(graph, start_node, goal_node, limit)
if result:
    print("Path found:", result)
else:
    print("Path not found within the limit.")
