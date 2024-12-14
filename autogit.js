import heapq

def astar(start, goal, graph, heuristic):
    open_list = []
    closed_set = set()
    
    heapq.heappush(open_list, (0, start))
    
    while open_list:
        _, current = heapq.heappop(open_list)
        
        if current == goal:
            path = []
            while current:
                path.append(current)
                current = graph[current][1]
            return path[::-1]
        
        closed_set.add(current)
        
        for neighbor, cost in graph[current][0].items():
            if neighbor in closed_set:
                continue
            
            new_cost = graph[current][2] + cost
            heuristic_cost = new_cost + heuristic[neighbor]
            
            heapq.heappush(open_list, (heuristic_cost, neighbor))
            graph[neighbor][2] = new_cost
            graph[neighbor][1] = current
    
    return None

# Define your starting point, goal, graph, and heuristic here
