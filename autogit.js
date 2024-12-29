import heapq

def dijkstra(graph, source):
    distance = {node: float('infinity') for node in graph}
    distance[source] = 0
    pq = [(0, source)]
    
    while pq:
        dist, current = heapq.heappop(pq)
        
        if dist > distance[current]:
            continue
        
        for neighbor, weight in graph[current].items():
            new_dist = dist + weight
            if new_dist < distance[neighbor]:
                distance[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))
    
    return distance

# Example usage
graph = {
    'A': {'B': 2, 'C': 5},
    'B': {'A': 2, 'C': 1},
    'C': {'A': 5, 'B': 1}
}

source_node = 'A'
shortest_distances = dijkstra(graph, source_node)
print(shortest_distances)
