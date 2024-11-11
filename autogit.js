import heapq

def astar_search(graph, start, goal):
    open_list = []
    closed_set = set()
    heapq.heappush(open_list, (0, start))
    
    while open_list:
        _, current = heapq.heappop(open_list)
        
        if current == goal:
            # Path found, reconstruct and return it
            path = []
            while current:
                path.insert(0, current)
                current = graph[current][1]
            return path
        
        closed_set.add(current)
        
        for neighbor in graph[current][0]:
            if neighbor in closed_set:
                continue
                
            tentative_g = graph[current][2] + graph[current][0][neighbor]
            if (tentative_g, neighbor) not in open_list:
                heapq.heappush(open_list, (tentative_g + heuristic(neighbor, goal), neighbor))
                graph[neighbor][2] = tentative_g
                graph[neighbor][1] = current
                
    return None

# Example heuristic function (Euclidean distance)
def heuristic(node, goal):
    x1, y1 = node
    x2, y2 = goal
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5

# Example graph representation
graph = {
    (0, 0): ({(0, 1): 1, (1, 0): 1}, None, 0),
    (0, 1): ({(0, 0): 1, (0, 2): 1, (1, 1): 1}, None, 0),
    (0, 2): ({(0, 1): 1, (1, 2): 1}, None, 0),
    (1, 0): ({(0, 0): 1, (1, 1): 1}, None, 0),
    (1, 1): ({(0, 1): 1, (1, 0): 1, (1, 2): 1, (2, 1): 1}, None, 0),
    (1, 2): ({(0, 2): 1, (1, 1): 1}, None, 0),
    (2, 1): ({(1, 1): 1, (2, 2): 1}, None, 0),
    (2, 2): ({(1, 2): 1}, None, 0)
}

start = (0, 0)
goal = (2, 2)

path = astar_search(graph, start, goal)
print(path)
