from collections import deque

def breadth_limited_search(graph, start, goal, depth_limit):
    queue = deque([(start, 0)])
    
    while queue:
        node, depth = queue.popleft()
        
        if node == goal:
            return True
        
        if depth < depth_limit:
            neighbors = graph.get(node, [])
            for neighbor in neighbors:
                queue.append((neighbor, depth + 1))
    
    return False

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['G'],
    'F': ['H'],
    'G': [],
    'H': ['I'],
    'I': []
}

start_node = 'A'
goal_node = 'I'
depth_limit = 3

if breadth_limited_search(graph, start_node, goal_node, depth_limit):
    print("Goal found within depth limit.")
else:
    print("Goal not found within depth limit.")
