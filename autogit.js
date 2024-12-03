from collections import deque

def bi_directional_search(graph, start, goal):
    # Initialize the frontiers for forward and backward search
    forward_frontier = deque([start])
    backward_frontier = deque([goal])

    # Initialize sets to keep track of visited nodes for both directions
    forward_visited = set([start])
    backward_visited = set([goal])

    # Main loop
    while forward_frontier and backward_frontier:
        # Perform forward search step
        current_node = forward_frontier.popleft()
        for neighbor in graph[current_node]:
            if neighbor not in forward_visited:
                if neighbor in backward_visited:
                    return "Path found"  # You can return or store the path here
                forward_frontier.append(neighbor)
                forward_visited.add(neighbor)

        # Perform backward search step
        current_node = backward_frontier.popleft()
        for neighbor in graph[current_node]:
            if neighbor not in backward_visited:
                if neighbor in forward_visited:
                    return "Path found"  # You can return or store the path here
                backward_frontier.append(neighbor)
                backward_visited.add(neighbor)

    return "No path found"

# Example graph represented as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E', 'G'],
    'G': ['F']
}

start_node = 'A'
goal_node = 'G'

result = bi_directional_search(graph, start_node, goal_node)
print(result)
