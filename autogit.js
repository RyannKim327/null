from collections import deque

def bi_directional_search(graph, start, goal):
    start_queue = deque([(start, [start])])
    goal_queue = deque([(goal, [goal])])
    
    while start_queue and goal_queue:
        start_node, start_path = start_queue.popleft()
        goal_node, goal_path = goal_queue.popleft()
        
        if start_node in goal_path:
            return start_path + goal_path[::-1][1:]
        
        if goal_node in start_path:
            return start_path + goal_path[::-1][1:]
        
        for neighbor in graph[start_node]:
            if neighbor not in start_path:
                start_queue.append((neighbor, start_path + [neighbor]))
        
        for neighbor in graph[goal_node]:
            if neighbor not in goal_path:
                goal_queue.append((neighbor, goal_path + [neighbor]))

# Example graph representation
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B', 'F'],
    'E': ['C', 'G'],
    'F': ['D'],
    'G': ['E']
}

start_node = 'A'
goal_node = 'G'

path = bi_directional_search(graph, start_node, goal_node)
print(path)
