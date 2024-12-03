def bellman_ford(graph, source):
    vertices = graph.keys()
    distance = {v: float('infinity') for v in vertices}
    distance[source] = 0

    for _ in range(len(vertices) - 1):
        for u in vertices:
            for v, w in graph[u].items():
                if distance[u] + w < distance[v]:
                    distance[v] = distance[u] + w

    # Check for negative cycles
    for u in vertices:
        for v, w in graph[u].items():
            if distance[u] + w < distance[v]:
                print("Graph contains negative cycle")
                return

    return distance
graph = {
    'A': {'B': -1, 'C': 4},
    'B': {'D': 2, 'E': 3},
    'C': {'B': 3, 'D': 5},
    'D': {},
    'E': {'D': -3}
}

source_node = 'A'
shortest_distances = bellman_ford(graph, source_node)
print(shortest_distances)
