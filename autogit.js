def astar_search(start, goal, heuristic):
    open_set = PriorityQueue()
    open_set.put(start, 0)
    came_from = {}
    cost_so_far = {}
    came_from[start] = None
    cost_so_far[start] = 0
    
    while not open_set.empty():
        current = open_set.get()
        
        if current == goal:
            path = reconstruct_path(came_from, start, goal)
            return path
        
        for next in get_neighbors(current):
            new_cost = cost_so_far[current] + get_cost(current, next)
            if next not in cost_so_far or new_cost < cost_so_far[next]:
                cost_so_far[next] = new_cost
                priority = new_cost + heuristic(next, goal)
                open_set.put(next, priority)
                came_from[next] = current
    
    return None

def reconstruct_path(came_from, start, goal):
    current = goal
    path = []
    while current != start:
        path.append(current)
        current = came_from[current]
    path.append(start)
    path.reverse()
    return path
