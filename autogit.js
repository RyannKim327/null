def tarjan(graph):
    index = {}
    lowlink = {}
    onStack = {}
    stack = []
    result = []
    index_counter = [0]

    def strongconnect(v):
        index[v] = index_counter[0]
        lowlink[v] = index_counter[0]
        index_counter[0] += 1
        stack.append(v)
        onStack[v] = True

        for w in graph.get(v, []):
            if w not in index:
                strongconnect(w)
                lowlink[v] = min(lowlink[v], lowlink[w])
            elif w in onStack:
                lowlink[v] = min(lowlink[v], index[w])

        if lowlink[v] == index[v]:
            scc = []
            while True:
                w = stack.pop()
                onStack.pop(w)
                scc.append(w)
                if w == v:
                    break
            result.append(scc)

    for v in graph.keys():
        if v not in index:
            strongconnect(v)

    return result

# Example usage:
graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [3]
}

print(tarjan(graph))
