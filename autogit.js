def bidirectional_search(graph, start, goal):
    forward_queue = [start]
    backward_queue = [goal]
    forward_visited = {start}
    backward_visited = {goal}
    
    while forward_queue and backward_queue:
        # Expand forward search
        node = forward_queue.pop(0)
        for neighbor in graph[node]:
            if neighbor not in forward_visited:
                forward_visited.add(neighbor)
                forward_queue.append(neighbor)
            if neighbor in backward_visited:
                # Path found
                return True
        
        # Expand backward search
        node = backward_queue.pop(0)
        for neighbor in graph[node]:
            if neighbor not in backward_visited:
                backward_visited.add(neighbor)
                backward_queue.append(neighbor)
            if neighbor in forward_visited:
                # Path found
                return True
    
    return False

# Example graph representation as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B', 'F'],
    'E': ['C', 'G'],
    'F': ['D'],
    'G': ['E']
}

# Example start and goal nodes
start = 'A'
goal = 'G'

# Call the bidirectional search function
result = bidirectional_search(graph, start, goal)
print(result)
