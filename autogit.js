def bi_directional_search(graph, start, goal):
    forward_queue = [start]
    backward_queue = [goal]

    forward_visited = {start}
    backward_visited = {goal}

    while forward_queue and backward_queue:
        if len(forward_queue) <= len(backward_queue):
            current = forward_queue.pop(0)
            if current in backward_visited:
                return True
            for neighbor in graph[current]:
                if neighbor not in forward_visited:
                    forward_visited.add(neighbor)
                    forward_queue.append(neighbor)
        else:
            current = backward_queue.pop(0)
            if current in forward_visited:
                return True
            for neighbor in graph[current]:
                if neighbor not in backward_visited:
                    backward_visited.add(neighbor)
                    backward_queue.append(neighbor)

    return False

# Example usage
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

result = bi_directional_search(graph, start, goal)
print(result)
