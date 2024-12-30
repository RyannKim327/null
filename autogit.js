import heapq

def dijkstra(graph, start):
    pq = []
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    heapq.heappush(pq, (0, start))

    while pq:
        current_dist, current_vertex = heapq.heappop(pq)

        if current_dist > distances[current_vertex]:
            continue

        for neighbor, weight in graph[current_vertex].items():
            distance = current_dist + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))

    return distances

# Example graph representation
graph = {
    'A': {'B': 5, 'C': 3},
    'B': {'A': 5, 'C': 1, 'D': 2},
    'C': {'A': 3, 'B': 1, 'D': 4},
    'D': {'B': 2, 'C': 4}
}

start_vertex = 'A'
shortest_distances = dijkstra(graph, start_vertex)
print(shortest_distances)
