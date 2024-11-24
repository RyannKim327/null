import heapq

def heuristic(node, goal):
    # Calculate the heuristic value using Euclidean distance
    return ((node[0] - goal[0])**2 + (node[1] - goal[1])**2)**0.5

def astar_search(graph, start, goal):
    open_set = []
    closed_set = set()
    heapq.heappush(open_set, (0, start, []))  # (f_cost, node, path)

    while open_set:
        f_cost, current_node, path = heapq.heappop(open_set)

        if current_node == goal:
            return path + [current_node]

        if current_node in closed_set:
            continue

        closed_set.add(current_node)

        for neighbor, cost in graph[current_node].items():
            new_path = path + [current_node]
            g_cost = f_cost - heuristic(current_node, goal) + cost
            h_cost = heuristic(neighbor, goal)
            f_cost = g_cost + h_cost
            heapq.heappush(open_set, (f_cost, neighbor, new_path))

    return None

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'D': 2},
    'C': {'A': 4, 'D': 5},
    'D': {'B': 2, 'C': 5}
}

start = 'A'
goal = 'D'

path = astar_search(graph, start, goal)
print("Shortest path:", path)
