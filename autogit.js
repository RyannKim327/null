class TarjanSCC:
    def __init__(self, graph):
        self.graph = graph
        self.visited = set()
        self.stack = []
        self.low_link = {}
        self.ids = {}
        self.scc = []
        self.id_count = 0

    def tarjan_scc(self):
        def dfs(node):
            self.low_link[node] = self.id_count
            self.ids[node] = self.id_count
            self.id_count += 1
            self.stack.append(node)
            self.visited.add(node)

            for neighbor in self.graph[node]:
                if neighbor not in self.ids:
                    dfs(neighbor)
                if neighbor in self.visited:
                    self.low_link[node] = min(self.low_link[node], self.low_link[neighbor])

            if self.low_link[node] == self.ids[node]:
                component = []
                while True:
                    neighbor = self.stack.pop()
                    component.append(neighbor)
                    self.visited.remove(neighbor)
                    if neighbor == node:
                        break
                self.scc.append(component)

        for node in self.graph:
            if node not in self.ids:
                dfs(node)

        return self.scc

# Example usage
graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 2]
}

tarjan = TarjanSCC(graph)
scc = tarjan.tarjan_scc()
print(scc)
