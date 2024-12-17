import heapq

def dijkstra(graph, start):
    # Initialize distances to all nodes as infinity
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    queue = [(0, start)]

    while queue:
        current_distance, current_node = heapq.heappop(queue)

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(queue, (distance, neighbor))

    return distances

# Example usage:
graph = {
    'A': {'B': 5, 'C': 3},
    'B': {'A': 5, 'C': 1, 'D': 1},
    'C': {'A': 3, 'B': 1, 'D': 3},
    'D': {'B': 1, 'C': 3}
}

start_node = 'A'
shortest_distances = dijkstra(graph, start_node)

print("Shortest distances from node {}:".format(start_node))
for node, distance in shortest_distances.items():
    print("Node: {}, Distance: {}".format(node, distance))
