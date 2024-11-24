class TarjansSCC:
    def __init__(self, graph):
        self.graph = graph
        self.num_vertices = len(graph)
        self.index = 0
        self.lowlink = [float('inf')] * self.num_vertices
        self.visited = [False] * self.num_vertices
        self.stack = []
        self.scc_components = []

    def tarjan_scc(self):
        for v in range(self.num_vertices):
            if not self.visited[v]:
                self._tarjan_scc(v)

    def _tarjan_scc(self, v):
        self.lowlink[v] = self.index
        self.index += 1
        self.visited[v] = True
        self.stack.append(v)
        for w in self.graph[v]:
            if not self.visited[w]:
                self._tarjan_scc(w)
                self.lowlink[v] = min(self.lowlink[v], self.lowlink[w])
            elif w in self.stack:
                self.lowlink[v] = min(self.lowlink[v], self.lowlink[w])
        if self.lowlink[v] == v:
            component = []
            while True:
                w = self.stack.pop()
                component.append(w)
                if w == v:
                    break
            self.scc_components.append(component)

# Example graph
graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5],
    5: [3, 6],
    6: [7],
    7: [8, 10],
    8: [6],
    9: [7],
    10: [11],
    11: [9],
}

tarjan = TarjansSCC(graph)
tarjan.tarjan_scc()

print(tarjan.scc_components)
