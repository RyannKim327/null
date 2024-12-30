from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)

    def breadth_first_search(self, start_node):
        visited = set()
        queue = []

        visited.add(start_node)
        queue.append(start_node)

        while queue:
            current_node = queue.pop(0)
            print(current_node)

            for neighbor in self.graph[current_node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

# Example usage
g = Graph()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(2, 0)
g.add_edge(2, 3)
g.add_edge(3, 3)

print("Breadth First Traversal starting from vertex 2:")
g.breadth_first_search(2)
