from collections import deque

def breadth_limited_search(graph, start, goal, limit):
    queue = deque([(start, 0)])
    
    while queue:
        node, depth = queue.popleft()
        
        if node == goal:
            return True
        
        if depth < limit:
            for neighbor in graph[node]:
                queue.append((neighbor, depth + 1))
    
    return False

# Example graph represented as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['E'],
    'D': ['F'],
    'E': [],
    'F': []
}

start_node = 'A'
goal_node = 'F'
limit = 2

result = breadth_limited_search(graph, start_node, goal_node, limit)

if result:
    print("Goal node found within the depth limit.")
else:
    print("Goal node not found within the depth limit.")
