import queue

def beam_search(graph, start, beam_width):
    q = queue.Queue()
    q.put([start])
    
    while not q.empty():
        path = q.get()
        node = path[-1]

        if len(path) == beam_width:
            return path
        
        for neighbor in graph[node]:
            new_path = list(path)
            new_path.append(neighbor)
            q.put(new_path)
            
    return None

# Example of using the beam search algorithm
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F', 'G'],
    'D': ['H', 'I'],
    'E': ['J', 'K'],
    'F': ['L', 'M'],
    'G': ['N', 'O']
}

start_node = 'A'
beam_width = 3

result = beam_search(graph, start_node, beam_width)
print(result)
