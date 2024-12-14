import heapq

def astar_search(graph, start, goal):
    open_list = []
    closed_set = set()
    came_from = {}
    g_score = {node: float('infinity') for node in graph}
    g_score[start] = 0
    f_score = {node: float('infinity') for node in graph}
    f_score[start] = heuristic(start, goal)

    heapq.heappush(open_list, (f_score[start], start))

    while open_list:
        current_f, current = heapq.heappop(open_list)

        if current == goal:
            return reconstruct_path(came_from, current)

        closed_set.add(current)

        for neighbor in graph[current]:
            tentative_g = g_score[current] + graph[current][neighbor]
            if tentative_g < g_score[neighbor]:
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g
                f_score[neighbor] = g_score[neighbor] + heuristic(neighbor, goal)
                if neighbor not in closed_set:
                    heapq.heappush(open_list, (f_score[neighbor], neighbor))

    return None  # No path found


def heuristic(node, goal):
    # Define a heuristic function here, such as the Euclidean distance for 2D coordinates
    return abs(node[0] - goal[0]) + abs(node[1] - goal[1])


def reconstruct_path(came_from, current):
    total_path = [current]
    while current in came_from:
        current = came_from[current]
        total_path.insert(0, current)
    return total_path


# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

start_node = 'A'
goal_node = 'D'

path = astar_search(graph, start_node, goal_node)
print(path)
