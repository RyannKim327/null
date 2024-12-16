function DFS(graph, start_node):
    create a stack data structure
    push start_node to the stack

    while the stack is not empty:
        current_node = pop from the stack
        if current_node is not visited:
            mark current_node as visited
            process current_node

            for each neighbor of current_node in graph:
                push neighbor to the stack
def dfs(graph, start_node):
    visited = set()
    stack = [start_node]

    while stack:
        current_node = stack.pop()
        if current_node not in visited:
            visited.add(current_node)
            print(current_node)

            for neighbor in graph[current_node]:
                if neighbor not in visited:
                    stack.append(neighbor)

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

dfs(graph, 'A')
