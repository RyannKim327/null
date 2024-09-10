def bidirectional_search(graph, start, goal):
    # Initialize forward and backward queues
    forward_queue = [start]
    backward_queue = [goal]
    
    # Initialize visited sets
    forward_visited = set([start])
    backward_visited = set([goal])

    while forward_queue and backward_queue:
        # Perform forward search
        node = forward_queue.pop(0)
        for neighbor in graph[node]:
            if neighbor not in forward_visited:
                forward_visited.add(neighbor)
                forward_queue.append(neighbor)
                
            # Check if forward and backward searches meet
            if neighbor in backward_visited:
                return "Path found"

        # Perform backward search
        node = backward_queue.pop(0)
        for neighbor in graph[node]:
            if neighbor not in backward_visited:
                backward_visited.add(neighbor)
                backward_queue.append(neighbor)
                
            # Check if forward and backward searches meet
            if neighbor in forward_visited:
                return "Path found"

    return "No path found"
