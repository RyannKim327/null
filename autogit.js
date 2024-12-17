from collections import defaultdict

class TarjanSCC:
    def __init__(self, num_nodes):
        self.num_nodes = num_nodes
        self.graph = defaultdict(list)
        self.index = 0
        self.lowlink = [None] * num_nodes
        self.visited = [False] * num_nodes
        self.stack = []
        self.sccs = []

    def add_edge(self, u, v):
        self.graph[u].append(v)

    def strong_connect(self, v):
        self.lowlink[v] = self.index
        self.visited[v] = True
        self.index += 1
        self.stack.append(v)

        for w in self.graph[v]:
            if self.lowlink[w] is None:
                self.strong_connect(w)
                self.lowlink[v] = min(self.lowlink[v], self.lowlink[w])
            elif self.visited[w]:
                self.lowlink[v] = min(self.lowlink[v], self.lowlink[w])

        if self.lowlink[v] == v:
            scc = []
            while True:
                w = self.stack.pop()
                scc.append(w)
                self.visited[w] = False
                if w == v:
                    break
            self.sccs.append(scc)

    def find_sccs(self):
        for v in range(self.num_nodes):
            if self.lowlink[v] is None:
                self.strong_connect(v)

        return self.sccs

# Example usage:
g = TarjanSCC(5)
g.add_edge(0, 1)
g.add_edge(1, 2)
g.add_edge(2, 0)
g.add_edge(1, 3)
g.add_edge(3, 4)
g.add_edge(4, 3)

sccs = g.find_sccs()
print(sccs)
