import heapq

def astar_search(start, goal, graph, heuristic):
    open_list = []
    closed_list = set()
    heapq.heappush(open_list, (0, start))

    while open_list:
        _, current = heapq.heappop(open_list)

        if current == goal:
            path = []
            while current is not None:
                path.append(current)
                current = graph[current][1]
            return path[::-1]

        closed_list.add(current)

        for neighbor in graph[current][0]:
            if neighbor in closed_list:
                continue

            tentative_g = graph[current][2] + graph[current][0][neighbor]
            if (tentative_g, neighbor) not in open_list:
                heapq.heappush(open_list, (tentative_g + heuristic(neighbor, goal), neighbor))
                graph[neighbor][2] = tentative_g
                graph[neighbor][1] = current

    return None

# Example usage
graph = {
    'A': ({'B': 1, 'C': 4}, None, float('inf')),
    'B': ({'A': 1, 'D': 2}, None, float('inf')),
    'C': ({'A': 4, 'D': 5}, None, float('inf')),
    'D': ({'B': 2, 'C': 5}, None, float('inf'))
}

heuristic = {
    'A': 7,
    'B': 6,
    'C': 2,
    'D': 1
}

start = 'A'
goal = 'D'
path = astar_search(start, goal, graph, lambda node, goal: heuristic[node])
print(path)
