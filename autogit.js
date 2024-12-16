class Graph:
    def __init__(self, n):
        self.n = n
        self.adj_list = [[] for _ in range(n)]
        
    def add_edge(self, u, v):
        self.adj_list[u].append(v)
        
    def tarjan_scc(self):
        index = 0
        stack = []
        result = []
        indices = [-1] * self.n
        low_links = [-1] * self.n
        on_stack = [False] * self.n
        
        def dfs(node):
            nonlocal index
            indices[node] = index
            low_links[node] = index
            index += 1
            stack.append(node)
            on_stack[node] = True
            
            for neighbor in self.adj_list[node]:
                if indices[neighbor] == -1:
                    dfs(neighbor)
                    low_links[node] = min(low_links[node], low_links[neighbor])
                elif on_stack[neighbor]:
                    low_links[node] = min(low_links[node], indices[neighbor])
            
            if indices[node] == low_links[node]:
                scc = []
                while True:
                    top = stack.pop()
                    on_stack[top] = False
                    scc.append(top)
                    if top == node:
                        break
                result.append(scc)
        
        for i in range(self.n):
            if indices[i] == -1:
                dfs(i)
        
        return result

# Example usage
g = Graph(5)
g.add_edge(0, 1)
g.add_edge(1, 2)
g.add_edge(2, 0)
g.add_edge(1, 3)
g.add_edge(3, 4)
g.add_edge(4, 3)

print(g.tarjan_scc())
