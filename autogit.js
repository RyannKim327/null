def bi_directional_search(graph, start, goal):
    start_queue = [start]  # Queue for start node
    goal_queue = [goal]    # Queue for goal node

    start_visited = set()  # Set to store visited nodes from start
    goal_visited = set()   # Set to store visited nodes from goal

    while start_queue and goal_queue:
        # Search from start node
        curr_start = start_queue.pop(0)
        start_visited.add(curr_start)
        if curr_start in goal_visited:
            return "Path found"

        for neighbor in graph[curr_start]:
            if neighbor not in start_visited:
                start_queue.append(neighbor)

        # Search from goal node
        curr_goal = goal_queue.pop(0)
        goal_visited.add(curr_goal)
        if curr_goal in start_visited:
            return "Path found"

        for neighbor in graph[curr_goal]:
            if neighbor not in goal_visited:
                goal_queue.append(neighbor)

    return "Path not found"

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

result = bi_directional_search(graph, 'A', 'F')
print(result)
