def depth_limited_search(graph, start, goal, depth_limit):
    stack = [(start, [start])]
    
    while stack:
        (node, path) = stack.pop()
        
        if node == goal:
            return path
        
        if len(path) < depth_limit:
            for neighbor in graph[node]:
                if neighbor not in path:
                    stack.append((neighbor, path + [neighbor]))
    
    return None

# Example graph
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': [],
}

start_node = 'A'
goal_node = 'F'
depth_limit = 3

result = depth_limited_search(graph, start_node, goal_node, depth_limit)

if result:
    print("Path found:", result)
else:
    print("Path not found within depth limit.")
