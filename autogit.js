class TarjanSCC:
    def __init__(self, num_nodes):
        self.num_nodes = num_nodes
        self.graph = [[] for _ in range(num_nodes)]
        self.low_link = [-1] * num_nodes
        self.ids = [-1] * num_nodes
        self.stack = []
        self.on_stack = [False] * num_nodes
        self.id_count = 0
        self.scc = []

    def add_edge(self, u, v):
        self.graph[u].append(v)

    def tarjan_scc(self):
        for i in range(self.num_nodes):
            if self.ids[i] == -1:
                self._dfs(i)

    def _dfs(self, at):
        self.ids[at] = self.id_count
        self.low_link[at] = self.id_count
        self.id_count += 1
        self.stack.append(at)
        self.on_stack[at] = True

        for to in self.graph[at]:
            if self.ids[to] == -1:
                self._dfs(to)
                self.low_link[at] = min(self.low_link[at], self.low_link[to])
            elif self.on_stack[to]:
                self.low_link[at] = min(self.low_link[at], self.ids[to])

        if self.ids[at] == self.low_link[at]:
            scc_component = []
            while True:
                node = self.stack.pop()
                self.on_stack[node] = False
                scc_component.append(node)
                if node == at:
                    break
            self.scc.append(scc_component)

# Example Usage
num_nodes = 5
tarjan = TarjanSCC(num_nodes)
tarjan.add_edge(0, 1)
tarjan.add_edge(1, 2)
tarjan.add_edge(2, 0)
tarjan.add_edge(1, 3)
tarjan.add_edge(3, 4)
tarjan.add_edge(4, 3)

tarjan.tarjan_scc()
print(tarjan.scc)
