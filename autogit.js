def breadth_limited_search(graph, start, goal, limit):
    visited = []
    queue = [[start]]
    
    if start == goal:
        return [start]
    
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
limit = 3

result = breadth_limited_search(graph, start, goal, limit)

if result:
    print(f"Path found: {result}")
else:
    print("No path found within the limit.")
