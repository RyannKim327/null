from collections import defaultdict

def tarjan_strongly_connected_components(graph):
    index_counter = [0]
    stack = []
    low_links = {}
    index = {}
    result = []

    def strongconnect(node):
        index[node] = index_counter[0]
        low_links[node] = index_counter[0]
        index_counter[0] += 1
        stack.append(node)

        for neighbor in graph[node]:
            if neighbor not in index:
                strongconnect(neighbor)
                low_links[node] = min(low_links[node], low_links[neighbor])
            elif neighbor in stack:
                low_links[node] = min(low_links[node], index[neighbor])

        if low_links[node] == index[node]:
            connected_component = []
            while True:
                successor = stack.pop()
                connected_component.append(successor)
                if successor == node:
                    break
            result.append(connected_component)

    for node in graph:
        if node not in index:
            strongconnect(node)

    return result

# Example graph as an adjacency list
graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [3, 5],
    5: [6],
    6: [7],
    7: [8],
    8: [6, 9],
    9: [10, 11],
    10: [9],
    11: [12],
    12: [8, 13],
    13: [5, 14],
    14: [13]
}

print(tarjan_strongly_connected_components(graph))
