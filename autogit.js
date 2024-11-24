from queue import PriorityQueue

def astar_search(graph, start, goal):
    open_set = PriorityQueue()
    open_set.put((0, start))
    came_from = {}
    cost_so_far = {}
    came_from[start] = None
    cost_so_far[start] = 0
    
    while not open_set.empty():
        _, current = open_set.get()
        
        if current == goal:
            path = []
            while current is not None:
                path.insert(0, current)
                current = came_from[current]
            return path
        
        for next_node in graph[current]:
            new_cost = cost_so_far[current] + graph[current][next_node]
            if next_node not in cost_so_far or new_cost < cost_so_far[next_node]:
                cost_so_far[next_node] = new_cost
                priority = new_cost + heuristic(next_node, goal)
                open_set.put((priority, next_node))
                came_from[next_node] = current
                
    return None

def heuristic(node, goal):
    # A simple heuristic function (e.g., Euclidean distance)
    return abs(node[0] - goal[0]) + abs(node[1] - goal[1])

# Example graph representation
graph = {
    (0, 0): {(0, 1): 1, (1, 0): 1},
    (0, 1): {(0, 0): 1, (1, 1): 1},
    (1, 0): {(0, 0): 1, (1, 1): 1},
    (1, 1): {(0, 1): 1, (1, 0): 1}
}

start = (0, 0)
goal = (1, 1)

path = astar_search(graph, start, goal)
print(path)
