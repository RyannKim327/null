from collections import deque

def breadth_limited_search(graph, start, goal, depth_limit):
    queue = deque([(start, [start])])
    
    while queue:
        node, path = queue.popleft()
        
        if node == goal:
            return path
        
        if len(path) < depth_limit:
            for neighbor in graph[node]:
                if neighbor not in path:
                    queue.append((neighbor, path + [neighbor]))
    
    return None

# Example graph
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

start = 'A'
goal = 'F'
depth_limit = 3

result = breadth_limited_search(graph, start, goal, depth_limit)
if result:
    print("Path found:", result)
else:
    print("Path not found within depth limit.")
