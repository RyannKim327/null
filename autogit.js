def bi_directional_search(graph, start_node, end_node):
    # Queue for forward search
    queue_forward = [start_node]
    visited_forward = set([start_node])

    # Queue for backward search
    queue_backward = [end_node]
    visited_backward = set([end_node])

    while queue_forward and queue_backward:
        # Forward search
        current_node_forward = queue_forward.pop(0)
        for neighbor in graph[current_node_forward]:
            if neighbor not in visited_forward:
                visited_forward.add(neighbor)
                queue_forward.append(neighbor)

        # Backward search
        current_node_backward = queue_backward.pop(0)
        for neighbor in graph[current_node_backward]:
            if neighbor in visited_forward:
                return "Path found"

            if neighbor not in visited_backward:
                visited_backward.add(neighbor)
                queue_backward.append(neighbor)

    return "Path not found"

# Example graph
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

result = bi_directional_search(graph, start_node, end_node)
print(result)
