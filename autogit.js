# Define a function to implement the Bellman-Ford algorithm
def bellman_ford(graph, start):
    # Initialize distances to all nodes as infinity
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0

    # Relax edges repeatedly
    for _ in range(len(graph) - 1):
        for node in graph:
            for neighbor in graph[node]:
                if distances[node] + graph[node][neighbor] < distances[neighbor]:
                    distances[neighbor] = distances[node] + graph[node][neighbor]

    # Check for negative cycles
    for node in graph:
        for neighbor in graph[node]:
            if distances[node] + graph[node][neighbor] < distances[neighbor]:
                raise ValueError("Graph contains a negative cycle")

    return distances

# Example graph representation
graph = {
    'A': {'B': -1, 'C': 4},
    'B': {'C': 3, 'D': 2, 'E': 2},
    'C': {},
    'D': {'B': 1, 'C': 5},
    'E': {'D': -3}
}

# Call the Bellman-Ford algorithm function
start_node = 'A'
shortest_distances = bellman_ford(graph, start_node)

# Print the shortest distances from the start node
for node, distance in shortest_distances.items():
    print(f"Shortest distance from {start_node} to {node}: {distance}")
