from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def addEdge(self, u, v):
        self.graph[u].append(v)

    def topologicalSortUtil(self, v, visited, stack):
        visited[v] = True

        for i in self.graph[v]:
            if visited[i] == False:
                self.topologicalSortUtil(i, visited, stack)

        stack.append(v)

    def topologicalSort(self):
        visited = [False] * len(self.graph)
        stack = []

        for i in range(len(self.graph)):
            if visited[i] == False:
                self.topologicalSortUtil(i, visited, stack)

        return stack[::-1]

g = Graph()
g.addEdge(5, 2)
g.addEdge(5, 0)
g.addEdge(4, 0)
g.addEdge(4, 1)
g.addEdge(2, 3)
g.addEdge(3, 1)

print("Topological sorting of the graph:")
print(g.topologicalSort())
