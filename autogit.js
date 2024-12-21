def depth_limited_search(graph, start, goal, depth_limit):
    stack = [(start, [start])]
    
    while stack:
        (node, path) = stack.pop()
        
        if node == goal:
            return path
        
        if len(path) < depth_limit:
            for neighbor in graph[node]:
                stack.append((neighbor, path + [neighbor]))
    
    return None

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['G', 'H'],
    'F': ['I'],
    'G': [],
    'H': [],
    'I': []
}

start_node = 'A'
goal_node = 'I'
depth_limit = 3

result = depth_limited_search(graph, start_node, goal_node, depth_limit)
if result:
    print("Path found:", result)
else:
    print("Path not found within depth limit.")
