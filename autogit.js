from collections import deque

def breadth_limited_search(graph, start, goal, limit):
    visited = set()
    queue = deque([(start, 0)])
    
    while queue:
        node, depth = queue.popleft()
        
        if node == goal:
            return True

        if depth < limit:
            visited.add(node)
            for neighbor in graph[node]:
                if neighbor not in visited:
                    queue.append((neighbor, depth + 1))
    
    return False

# Example graph
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

start_node = 'A'
goal_node = 'F'
limit = 2

result = breadth_limited_search(graph, start_node, goal_node, limit)

if result:
    print(f'Goal node {goal_node} found within limit of {limit}.')
else:
    print(f'Goal node {goal_node} not found within limit of {limit}.')
