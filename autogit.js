def bi_directional_search(graph, start_node, end_node):
    forward_queue = [start_node]
    backward_queue = [end_node]
    visited_forward = set()
    visited_backward = set()

    while forward_queue and backward_queue:
        # Forward search
        current_node_forward = forward_queue.pop(0)
        visited_forward.add(current_node_forward)

        # Backward search
        current_node_backward = backward_queue.pop(0)
        visited_backward.add(current_node_backward)

        if current_node_forward in visited_backward:
            return True  # Path found

        if current_node_backward in visited_forward:
            return True  # Path found

        for neighbor in graph[current_node_forward]:
            if neighbor not in visited_forward:
                forward_queue.append(neighbor)

        for neighbor in graph[current_node_backward]:
            if neighbor not in visited_backward:
                backward_queue.append(neighbor)

    return False  # Path not found

# Example graph representation
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B', 'F'],
    'E': ['C'],
    'F': ['D']
}

start_node = 'A'
end_node = 'F'

if bi_directional_search(graph, start_node, end_node):
    print("Path found between", start_node, "and", end_node)
else:
    print("No path found between", start_node, "and", end_node)
