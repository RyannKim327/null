class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.graph = defaultdict(list)
    
    def add_edge(self, u, v):
        self.graph[u].append(v)
def tarjan_scc(graph):
    def dfs(u):
        nonlocal index, stack, low_link, on_stack, result
        
        index += 1
        low_link[u] = index
        stack.append(u)
        on_stack[u] = True
        
        for v in graph[u]:
            if low_link[v] == -1:
                dfs(v)
                low_link[u] = min(low_link[u], low_link[v])
            elif on_stack[v]:
                low_link[u] = min(low_link[u], low_link[v])
        
        if low_link[u] == index:
            scc = []
            while True:
                node = stack.pop()
                on_stack[node] = False
                scc.append(node)
                if node == u:
                    break
            result.append(scc)

    index = 0
    result = []
    stack = []
    low_link = [-1] * graph.V
    on_stack = [False] * graph.V
    
    for u in range(graph.V):
        if low_link[u] == -1:
            dfs(u)

    return result
graph = Graph(5)
graph.add_edge(0, 1)
graph.add_edge(1, 2)
graph.add_edge(2, 0)
graph.add_edge(1, 3)
graph.add_edge(3, 4)
graph.add_edge(4, 3)
sccs = tarjan_scc(graph)
print("Strongly Connected Components:")
for scc in sccs:
    print(scc)
