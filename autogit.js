import heapq

def dijkstra(graph, source):
    pq = [(0, source)]
    distances = {node: float('infinity') for node in graph}
    distances[source] = 0

    while pq:
        curr_distance, curr_node = heapq.heappop(pq)
        
        if curr_distance > distances[curr_node]:
            continue
        
        for neighbor, weight in graph[curr_node].items():
            distance = curr_distance + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances

# Example usage
graph = {
    'A': {'B': 2, 'C': 1},
    'B': {'A': 2, 'C': 2},
    'C': {'A': 1, 'B': 2}
}
source_node = 'A'
shortest_distances = dijkstra(graph, source_node)

print(shortest_distances)
