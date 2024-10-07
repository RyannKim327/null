from collections import deque

class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, node, edge):
        if node in self.graph:
            self.graph[node].append(edge)
        else:
            self.graph[node] = [edge]

    def BFS(self, start_node):
        visited = set()
        queue = deque([start_node])
        visited.add(start_node)

        while queue:
            current_node = queue.popleft()
            print(current_node, end=" ")

            if current_node in self.graph:
                for neighbor in self.graph[current_node]:
                    if neighbor not in visited:
                        queue.append(neighbor)
                        visited.add(neighbor)

# Example Usage
graph = Graph()
graph.add_edge(0, 1)
graph.add_edge(0, 2)
graph.add_edge(1, 3)
graph.add_edge(2, 4)
graph.add_edge(2, 5)

print("Breadth First Search Starting from Node 0:")
graph.BFS(0)
