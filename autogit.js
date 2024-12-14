def bi_directional_search(graph, start, goal):
    forward_queue = [start]
    backward_queue = [goal]
    
    forward_visited = {start}
    backward_visited = {goal}
    
    while forward_queue and backward_queue:
        # Perform forward search
        current_node = forward_queue.pop(0)
        for neighbor in graph[current_node]:
            if neighbor in backward_visited:
                return "Path found"
            if neighbor not in forward_visited:
                forward_visited.add(neighbor)
                forward_queue.append(neighbor)
        
        # Perform backward search
        current_node = backward_queue.pop(0)
        for neighbor in graph[current_node]:
            if neighbor in forward_visited:
                return "Path found"
            if neighbor not in backward_visited:
                backward_visited.add(neighbor)
                backward_queue.append(neighbor)

    return "Path not found"
