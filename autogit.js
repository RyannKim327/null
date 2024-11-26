import queue

def beam_search(graph, start, beam_width):
    queue = [(start, [start], 0)]
    
    while queue:
        beam = []
        for i in range(min(len(queue), beam_width)):
            node, path, cost = queue.pop(0)
            if node not in path:
                for neighbor in graph[node]:
                    new_path = path + [neighbor]
                    new_cost = cost + graph[node][neighbor]
                    beam.append((neighbor, new_path, new_cost))
        
        beam = sorted(beam, key=lambda x: x[2])
        
        if any(True for x in beam if x[0] not in x[1]):
            queue = beam[:beam_width]

        if len(queue) == 0:
            break
    
    return min(queue, key=lambda x: x[2])

# Example graph
graph = {
    'A': {'B': 1, 'C': 2},
    'B': {'C': 1, 'D': 2},
    'C': {'D': 1},
    'D': {'E': 3},
    'E': {}
}

start_node = 'A'
beam_width = 2
result = beam_search(graph, start_node, beam_width)

print("Optimal path:", result[1])
print("Total cost:", result[2])
