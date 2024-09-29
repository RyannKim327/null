def bidirectional_search(graph, start, goal):
    # Initialize data structures for start and end points
    start_queue = [start]
    end_queue = [goal]
    
    start_visited = {start: None}
    end_visited = {goal: None}
    
    # Perform bidirectional search
    while start_queue and end_queue:
        # Expand frontier from start point
        current_start = start_queue.pop(0)
        for neighbor in graph[current_start]:
            if neighbor not in start_visited:
                start_queue.append(neighbor)
                start_visited[neighbor] = current_start
            if neighbor in end_visited:
                return combine_paths(start_visited, end_visited, neighbor)
        
        # Expand frontier from end point
        current_end = end_queue.pop(0)
        for neighbor in graph[current_end]:
            if neighbor not in end_visited:
                end_queue.append(neighbor)
                end_visited[neighbor] = current_end
            if neighbor in start_visited:
                return combine_paths(start_visited, end_visited, neighbor)
    
    return None

def combine_paths(start_visited, end_visited, meeting_node):
    path = []
    start_node = meeting_node
    while start_node is not None:
        path.insert(0, start_node)
        start_node = start_visited[start_node]
    
    end_node = end_visited[meeting_node]
    while end_node is not None:
        path.append(end_node)
        end_node = end_visited[end_node]
    
    return path
