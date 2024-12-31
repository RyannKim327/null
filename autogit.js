class Node:
    def __init__(self, state, depth, parent=None):
        self.state = state
        self.depth = depth
        self.parent = parent

def depth_limited_search(node, goal_state, max_depth):
    if node.depth > max_depth:
        return None
    if node.state == goal_state:
        return node
    for child_state in get_children(node.state):
        child_node = Node(child_state, node.depth + 1, node)
        result = depth_limited_search(child_node, goal_state, max_depth)
        if result is not None:
            return result
    return None

def get_children(state):
    # Implement your code here to generate and return child states
    return []

# Usage example:
initial_state = "A"
goal_state = "Z"
max_depth = 5
initial_node = Node(initial_state, 0)
result_node = depth_limited_search(initial_node, goal_state, max_depth)

if result_node is not None:
    path = [result_node.state]
    while result_node.parent is not None:
        result_node = result_node.parent
        path.append(result_node.state)
    path.reverse()
    print("Path found:", path)
else:
    print("Goal state not found within max depth")
