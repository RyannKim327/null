class Graph:
    def __init__(self, num_vertices):
        self.num_vertices = num_vertices
        self.adj_list = [[] for _ in range(num_vertices)]
        self.index = 0
        self.stack = []
        self.lowlink = [-1] * num_vertices
        self.on_stack = [False] * num_vertices
        self.scc_list = []

    def add_edge(self, u, v):
        self.adj_list[u].append(v)

    def tarjan_scc(self, v):
        self.lowlink[v] = self.index
        self.index += 1
        self.stack.append(v)
        self.on_stack[v] = True

        for w in self.adj_list[v]:
            if self.lowlink[w] == -1:
                self.tarjan_scc(w)
                self.lowlink[v] = min(self.lowlink[v], self.lowlink[w])
            elif self.on_stack[w]:
                self.lowlink[v] = min(self.lowlink[v], self.lowlink[w])

        if self.lowlink[v] == v:
            scc = []
            while True:
                w = self.stack.pop()
                self.on_stack[w] = False
                scc.append(w)
                if w == v:
                    break
            self.scc_list.append(scc)

    def find_scc(self):
        for v in range(self.num_vertices):
            if self.lowlink[v] == -1:
                self.tarjan_scc(v)

        return self.scc_list

# Example usage
g = Graph(5)
g.add_edge(0, 1)
g.add_edge(1, 2)
g.add_edge(2, 0)
g.add_edge(1, 3)
g.add_edge(3, 4)

scc_list = g.find_scc()
print(scc_list)
