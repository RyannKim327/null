import heapq

def astar_search(graph, start, goal):
    open_list = []
    closed_set = set()

    # Priority queue for open list
    heapq.heappush(open_list, (0, start))
    
    while open_list:
        cost, current_node = heapq.heappop(open_list)
        
        if current_node == goal:
            return path
        
        closed_set.add(current_node)
        
        for neighbor, weight in graph[current_node].items():
            if neighbor not in closed_set:
                heapq.heappush(open_list, (cost + weight, neighbor))

    return None

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'D': 3, 'E': 2},
    'C': {'F': 5},
    'D': {'G': 1},
    'E': {'G': 3},
    'F': {'G': 2},
    'G': {}
}

start = 'A'
goal = 'G'

result = astar_search(graph, start, goal)
print(result)
