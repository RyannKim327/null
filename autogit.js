def breadth_limited_search(graph, start, goal, limit):
    visited = []
    queue = [[start]]
    
    if start == goal:
        return start
    
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
                    if len(new_path) <= limit:
                        return new_path
            
            visited.append(node)
    
    return "No path found within the limit"
