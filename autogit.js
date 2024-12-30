import heapq

def dijkstra(graph, source):
    distances = {node: float('infinity') for node in graph}
    distances[source] = 0
    queue = [(0, source)]

    while queue:
        curr_dist, curr_node = heapq.heappop(queue)

        if curr_dist > distances[curr_node]:
            continue

        for neighbor, weight in graph[curr_node].items():
            distance = curr_dist + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(queue, (distance, neighbor))

    return distances

# Example usage
graph = {
    'A': {'B': 5, 'C': 3},
    'B': {'A': 5, 'C': 2, 'D': 1},
    'C': {'A': 3, 'B': 2, 'D': 6},
    'D': {'B': 1, 'C': 6}
}
source_node = 'A'
shortest_distances = dijkstra(graph, source_node)
print(shortest_distances)
