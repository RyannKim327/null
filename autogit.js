class Node:
    def __init__(self, value):
        self.value = value
        self.children = []

def depth_limited_search(root, goal, depth_limit):
    if root is None:
        return False

    stack = [(root, 0)]

    while stack:
        node, depth = stack.pop()

        if node.value == goal:
            return True

        if depth < depth_limit:
            for child in node.children:
                stack.append((child, depth + 1))

    return False

# Example usage
# Create a tree structure
root = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)
node5 = Node(5)

root.children = [node2, node3]
node2.children = [node4, node5]

# Run depth-limited search
goal = 4
depth_limit = 2
result = depth_limited_search(root, goal, depth_limit)

if result:
    print(f"Goal {goal} found within depth limit {depth_limit}.")
else:
    print(f"Goal {goal} not found within depth limit {depth_limit}.")
