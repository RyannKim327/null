# Define a function to run the Bellman-Ford algorithm
def bellman_ford(graph, start):
    # Step 1: Initialize distances from the start node to all other nodes as infinity
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    # Step 2: Relax edges repeatedly
    for _ in range(len(graph) - 1):
        for node in graph:
            for neighbor in graph[node]:
                if distances[node] + graph[node][neighbor] < distances[neighbor]:
                    distances[neighbor] = distances[node] + graph[node][neighbor]

    # Step 3: Check for negative cycles
    for node in graph:
        for neighbor in graph[node]:
            if distances[node] + graph[node][neighbor] < distances[neighbor]:
                print("Graph contains negative cycle")
                return

    return distances

# Define a sample graph
graph = {
    'A': {'B': -1, 'C': 4},
    'B': {'C': 3, 'D': 2, 'E': 2},
    'C': {},
    'D': {'B': 1, 'C': 5},
    'E': {'D': -3}
}

# Find shortest paths using Bellman-Ford algorithm
start_node = 'A'
shortest_paths = bellman_ford(graph, start_node)
print(shortest_paths)
