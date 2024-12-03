def tarjan_scc(graph):
    def dfs(node):
        nonlocal dfs_num, dfs_low, stack, scc_list
        dfs_num[node] = dfs_low[node] = visit_counter
        visit_counter += 1
        stack.append(node)
        on_stack[node] = True

        for neighbor in graph[node]:
            if dfs_num[neighbor] == -1:
                dfs(neighbor)
            if on_stack[neighbor]:
                dfs_low[node] = min(dfs_low[node], dfs_low[neighbor])

        if dfs_low[node] == dfs_num[node]:
            scc = []
            while True:
                current = stack.pop()
                on_stack[current] = False
                scc.append(current)
                if current == node:
                    break
            scc_list.append(scc)

    n = len(graph)
    dfs_num = [-1] * n
    dfs_low = [-1] * n
    stack = []
    on_stack = [False] * n
    visit_counter = 0
    scc_list = []

    for i in range(n):
        if dfs_num[i] == -1:
            dfs(i)

    return scc_list

# Example usage
graph = {0: [1], 1: [2], 2: [0, 3, 6], 3: [4], 4: [5, 7], 5: [3], 6: [5, 7], 7: [6]}
strongly_connected_components = tarjan_scc(graph)
print(strongly_connected_components)
