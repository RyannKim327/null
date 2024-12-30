def bi_directional_search(graph, start_node, end_node):
    # Initialize the start node queue as well as the end node queue
    start_queue = [start_node]
    end_queue = [end_node]
    
    # Initialize visited sets for both directions
    start_visited = set()
    end_visited = set()
    
    while start_queue and end_queue:
        # Bi-directional search from the start node
        current_start = start_queue.pop(0)
        start_visited.add(current_start)
        
        if current_start in end_visited:
            return True
        
        for neighbor in graph[current_start]:
            if neighbor not in start_visited:
                start_queue.append(neighbor)
        
        # Bi-directional search from the end node
        current_end = end_queue.pop(0)
        end_visited.add(current_end)
        
        if current_end in start_visited:
            return True
        
        for neighbor in graph[current_end]:
            if neighbor not in end_visited:
                end_queue.append(neighbor)
    
    return False

# Define a sample graph as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

start_node = 'A'
end_node = 'F'

if bi_directional_search(graph, start_node, end_node):
    print("Path found between", start_node, "and", end_node)
else:
    print("No path found between", start_node, "and", end_node)
