def breadth_limited_search(graph, start, goal, limit):
    if start == goal:
        return [start]
    
    visited = []
    queue = [[start]]
    
    while queue:
        path = queue.pop(0)
        node = path[-1]
        
        if node not in visited:
            neighbors = graph[node]
            
            for neighbor in neighbors:
                new_path = list(path)
                new_path.append(neighbor)
                queue.append(new_path)
                
                if neighbor == goal:
                    return new_path
            
            visited.append(node)
        
        if len(path) >= limit:
            continue
    
    return None

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': []
}

start = 'A'
goal = 'F'
limit = 3

result = breadth_limited_search(graph, start, goal, limit)
if result:
    print("Path found:", result)
else:
    print("Path not found within the depth limit.")
